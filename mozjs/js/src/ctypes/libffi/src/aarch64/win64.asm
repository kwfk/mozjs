;; Copyright (c) 2009, 2010, 2011, 2012 ARM Ltd.

;; Permission is hereby granted, free of charge, to any person obtaining
;; a copy of this software and associated documentation files (the
;; ``Software''), to deal in the Software without restriction, including
;; without limitation the rights to use, copy, modify, merge, publish,
;; distribute, sublicense, and/or sell copies of the Software, and to
;; permit persons to whom the Software is furnished to do so, subject to
;; the following conditions:

;; The above copyright notice and this permission notice shall be
;; included in all copies or substantial portions of the Software.

;; THE SOFTWARE IS PROVIDED ``AS IS'', WITHOUT WARRANTY OF ANY KIND,
;; EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
;; MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
;; IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
;; CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
;; TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
;; SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

;; Hand-converted from the sysv.S file in this directory.

        AREA |.text|, CODE, ARM64

   ;; ffi_call_SYSV()

   ;; Create a stack frame, setup an argument context, call the callee
   ;; and extract the result.

   ;; The maximum required argument stack size is provided,
   ;; ffi_call_SYSV() allocates that stack space then calls the
   ;; prepare_fn to populate register context and stack.  The
   ;; argument passing registers are loaded from the register
   ;; context and the callee called, on return the register passing
   ;; register are saved back to the context.  Our caller will
   ;; extract the return value from the final state of the saved
   ;; register context.

   ;; Prototype:

   ;; extern unsigned
   ;; ffi_call_SYSV (void (*)(struct call_context *context, unsigned char *,
   ;; 			   extended_cif *),
   ;;                struct call_context *context,
   ;;                extended_cif *,
   ;;                size_t required_stack_size,
   ;;                void (*fn)(void));

   ;; Therefore on entry we have:

   ;; x0 prepare_fn
   ;; x1 &context
   ;; x2 &ecif
   ;; x3 bytes
   ;; x4 fn

   ;; This function uses the following stack frame layout:

   ;; ==
   ;;              saved x30(lr)
   ;; x29(fp)->    saved x29(fp)
   ;;              saved x24
   ;;              saved x23
   ;;              saved x22
   ;; sp'    ->    saved x21
   ;;              ...
   ;; sp     ->    (constructed callee stack arguments)
   ;; ==

   ;; Voila!

	EXPORT |ffi_call_SYSV|

|ffi_call_SYSV| PROC
;#define ffi_call_SYSV_FS (8 * 4)

        stp     x29, x30, [sp, #-16]!

        mov     x29, sp
        sub     sp, sp, #32 	; ffi_call_SYSV_FS

        stp     x21, x22, [sp, #0]
        stp     x23, x24, [sp, #16]

        mov     x21, x1
        mov     x22, x2
        mov     x24, x4

        ; Allocate the stack space for the actual arguments, many
        ; arguments will be passed in registers, but we assume
        ; worst case and allocate sufficient stack for ALL of
        ; the arguments.
        sub     sp, sp, x3

        ; unsigned (*prepare_fn) (struct call_context *context,
        ;                         unsigned char *stack, extended_cif *ecif);

        mov     x23, x0
        mov     x0, x1
        mov     x1, sp
        ; x2 already in place
        blr     x23

        ; Preserve the flags returned.
        mov     x23, x0

        ; Figure out if we should touch the vector registers.
        tbz     x23, #0, noload_call

        ; Load the vector argument passing registers.
        ldp     q0, q1, [x21, #8*32 +  0]
        ldp     q2, q3, [x21, #8*32 + 32]
        ldp     q4, q5, [x21, #8*32 + 64]
        ldp     q6, q7, [x21, #8*32 + 96]

noload_call
        ; Load the core argument passing registers.
        ldp     x0, x1, [x21,  #0]
        ldp     x2, x3, [x21, #16]
        ldp     x4, x5, [x21, #32]
        ldp     x6, x7, [x21, #48]

        ; Don't forget x8 which may be holding the address of a return buffer.
        ldr     x8,     [x21, #8*8]

        blr     x24

        ; Save the core argument passing registers.
        stp     x0, x1, [x21,  #0]
        stp     x2, x3, [x21, #16]
        stp     x4, x5, [x21, #32]
        stp     x6, x7, [x21, #48]

        ; Note nothing useful ever comes back in x8!

        ; Figure out if we should touch the vector registers.
        tbz     x23, #0, nosave_call ; AARCH64_FFI_WITH_V_BIT

        ; Save the vector argument passing registers.
        stp     q0, q1, [x21, #8*32 + 0]
        stp     q2, q3, [x21, #8*32 + 32]
        stp     q4, q5, [x21, #8*32 + 64]
        stp     q6, q7, [x21, #8*32 + 96]

nosave_call
        ; All done, unwind our stack frame.
        ldp     x21, x22, [x29,  # - 32] ; ffi_call_SYSV_FS

        ldp     x23, x24, [x29,  # - 32 + 16] ; ffi_call_SYSV_FS

        mov     sp, x29

        ldp     x29, x30, [sp], #16

        ret

	ENDP

; #define ffi_closure_SYSV_FS (8 * 2 + AARCH64_CALL_CONTEXT_SIZE)

   ;; ffi_closure_SYSV

   ;; Closure invocation glue. This is the low level code invoked directly by
   ;; the closure trampoline to setup and call a closure.

   ;; On entry x17 points to a struct trampoline_data, x16 has been clobbered
   ;; all other registers are preserved.

   ;; We allocate a call context and save the argument passing registers,
   ;; then invoked the generic C ffi_closure_SYSV_inner() function to do all
   ;; the real work, on return we load the result passing registers back from
   ;; the call context.

   ;; On entry

   ;; extern void
   ;; ffi_closure_SYSV (struct trampoline_data *);

   ;; struct trampoline_data
   ;; {
   ;;      UINT64 *ffi_closure;
   ;;      UINT64 flags;
   ;; };

   ;; This function uses the following stack frame layout:

   ;; ==
   ;;              saved x30(lr)
   ;; x29(fp)->    saved x29(fp)
   ;;              saved x22
   ;;              saved x21
   ;;              ...
   ;; sp     ->    call_context
   ;; ==

   ;; Voila!

	IMPORT |ffi_closure_SYSV_inner|
	EXPORT |ffi_closure_SYSV|

|ffi_closure_SYSV| PROC
        stp     x29, x30, [sp, #-16]!

        mov     x29, sp

        sub     sp, sp, #256+512+16

        stp     x21, x22, [x29, #-16]

        ; Load x21 with &call_context.
        mov     x21, sp
        ; Preserve our struct trampoline_data
        mov     x22, x17

        ; Save the rest of the argument passing registers.
        stp     x0, x1, [x21, #0]
        stp     x2, x3, [x21, #16]
        stp     x4, x5, [x21, #32]
        stp     x6, x7, [x21, #48]
        ; Don't forget we may have been given a result scratch pad address.
        str     x8,     [x21, #64]

        ; Figure out if we should touch the vector registers.
        ldr     x0, [x22, #8]
        tbz     x0, #0, nosave_closure ; AARCH64_FFI_WITH_V_BIT

        ; Save the argument passing vector registers.
        stp     q0, q1, [x21, #8*32 + 0]
        stp     q2, q3, [x21, #8*32 + 32]
        stp     q4, q5, [x21, #8*32 + 64]
        stp     q6, q7, [x21, #8*32 + 96]

nosave_closure
        ; Load &ffi_closure..
        ldr     x0, [x22, #0]
        mov     x1, x21
        ; Compute the location of the stack at the point that the
        ; trampoline was called.
        add     x2, x29, #16

        bl      ffi_closure_SYSV_inner

        ; Figure out if we should touch the vector registers.
        ldr     x0, [x22, #8]
        tbz     x0, #0, noload_closure ; AARCH64_FFI_WITH_V_BIT

        ; Load the result passing vector registers.
        ldp     q0, q1, [x21, #8*32 + 0]
        ldp     q2, q3, [x21, #8*32 + 32]
        ldp     q4, q5, [x21, #8*32 + 64]
        ldp     q6, q7, [x21, #8*32 + 96]

noload_closure
        ; Load the result passing core registers.
        ldp     x0, x1, [x21,  #0]
        ldp     x2, x3, [x21, #16]
        ldp     x4, x5, [x21, #32]
        ldp     x6, x7, [x21, #48]
        ; Note nothing useful is returned in x8.

        ; We are done, unwind our frame.
        ldp     x21, x22, [x29,  #-16]

        mov     sp, x29

        ldp     x29, x30, [sp], #16

        ret

	ENDP
	END

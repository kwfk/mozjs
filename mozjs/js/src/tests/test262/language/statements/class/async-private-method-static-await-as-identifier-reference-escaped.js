// |reftest| skip error:SyntaxError -- class-static-methods-private is not supported
// This file was procedurally generated from the following sources:
// - src/async-functions/await-as-identifier-reference-escaped.case
// - src/async-functions/syntax/async-class-decl-static-private-method.template
/*---
description: await is a reserved keyword within generator function bodies and may not be used as an identifier reference. (Static async private method as a ClassDeclaration element)
esid: prod-AsyncMethod
features: [async-functions, class-static-methods-private]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      static PrivateMethodDefinition

    MethodDefinition :
      AsyncMethod

    Async Function Definitions

    AsyncMethod :
      async [no LineTerminator here] # PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    IdentifierReference : Identifier

    It is a Syntax Error if this production has a [Await] parameter and
    StringValue of Identifier is "await".

---*/
$DONOTEVALUATE();


class C { static async #method() {
    void \u0061wait;
}}

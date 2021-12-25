import { Static, Type } from "@sinclair/typebox";

const T = Type.String(); // const T = { "type": "string" }

type T = Static<typeof T>; // type T = string

console.log(T);

const User = Type.Object({
  id: Type.String(),
  name: Type.String(),
  timestamp: Type.Integer(),
});

console.log(User);
// value とtypeは文法上名前で衝突しないので、同名も使える
type User = Static<typeof User>;

const Foo = Type.RegEx(/foo/)
type Foo = Static<typeof Foo>;
console.log(Foo)
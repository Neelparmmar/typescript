import PI from "./hello";
// console.log(PI);
// function hello<T>(value: T) {
//   return value;
// }
// console.log(hello("Hello"));

//utility

// interface User {
//   id: number;
//   name?: string;
// }
// const helloUser: Readonly<{ id: number }> = {
//   id: 1,
// };
// helloUser.id = 2;
// console.log(helloUser);
// type Roles = "admin" | "user" | "guest";

// const permissions: Record<Roles, boolean> = {
//   admin: true,
//   user: true,
//   guest: false,
// };
// console.log(permissions);
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserPreview = Pick<User, "id" | "name">;

// const c: UserPreview = {
//   id: 1,
//   name: "fdfdf",
//   email: "fdfdf",
// };
// console.log(c);

interface Person {
  name: string;
  age: number;
}

function hello(person: Person, property: keyof Persontsc) {
  console.log(person, person[property]);
}
const person = {
  name: "neel",
  age: 21,
};

hello(person, "name");

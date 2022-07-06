// let a = Symbol("id");
// let b = Symbol("id");
// console.log(a.description);

let user = {
    name: "Thomas Shelby",
    age: 29,
}
let occupation = Symbol("key");
user[occupation] = "bookmaker";
console.log(user);

for (key in user) {
    console.log(user[key]);
}
console.log(user[occupation]);

let cloneUser = Object.assign({}, user);
console.log(cloneUser[occupation]);

let obj = {
    0: "test",
}
console.log(obj[0]);
console.log(obj["0"]);

let a = Symbol.for("id");
let b = Symbol.for("id");
console.log(a === b);

let c = Symbol.for("key");

console.log(Symbol.keyFor(a));
console.log(Symbol.keyFor(c));
console.log(Symbol.keyFor(Symbol("roll")));

user[a] = "jurbish";

console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));
'use strict'
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name + " says, Hi!");
    }
}
class Thief {
    constructor() {

    }
}
console.log(User.prototype.constructor.name);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));
console.log(Thief);
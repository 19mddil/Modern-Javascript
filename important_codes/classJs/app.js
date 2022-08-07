class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, from ${this.name}`);
    }
}
let user1 = new User("Rahim");
user1.sayHi();
console.log(typeof user1);
console.log(typeof User);
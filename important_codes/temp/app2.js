function f() {
    return "sayHi";
}
class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length > 4)
            this._name = value;
        else
            console.log("too short");
    }
    [f()]() {
        console.log(this.name + " says, Hello!");
    }
}
let user = new User("Robin");
let user1 = new User("Batman");
console.log(user.name);
user.name = "Amzad";
console.log(user.name);
user.sayHi();
user1.sayHi();
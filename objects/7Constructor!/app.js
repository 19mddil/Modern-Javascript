function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log("Hi " + this.name);
    }
    return `{ name : ${this.name} }`
}
let user = new User("Robin");
user.sayHi();
console.log(user);
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};
let rabbit = new Rabbit("Rabbito");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
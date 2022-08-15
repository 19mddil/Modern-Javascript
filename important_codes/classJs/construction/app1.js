let animal = {
    name: "Animal",
    eat() {
        console.log(`${this.name} eats`);
    }
}
let rabbit = {
    __proto__: animal,
    eat() {
        this.__proto__.eat.call(this); // super calling?
    }
}
rabbit.eat();

let longEar = {
    __proto__: rabbit,
    eat() {
        this.__proto__.eat.call(this);
    }
}
longEar.eat();//current object is longEar as this.
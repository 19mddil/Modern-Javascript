let animal = {
    sayHi() {
        console.log(`I'm an animal`);
    }
};
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi();
    }
};
let plant = {
    sayHi() {
        console.log("I'm a plant");
    }
};
let tree = {
    __proto__: plant,
    // sayHi: rabbit.sayHi // (*)
};
tree.sayHi();
    // I'm an animal (?!?)
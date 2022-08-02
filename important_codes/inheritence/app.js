let animal = {
    eats: true,
    walk() {
        console.log("The animal is walking on the moon");
    }
}
let rabbit = {
    jumps: true,
    __proto__: animal,
}

console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();
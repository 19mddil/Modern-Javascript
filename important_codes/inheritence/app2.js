let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log("Now,walk");
        }
        else {
            console.log("Do not walk");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
}
let rabbit = {
    __proto__: animal,
}
animal.sleep();
animal.walk();

rabbit.sleep();
rabbit.walk();
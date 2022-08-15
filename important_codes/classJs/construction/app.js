class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped.`);
    }
}
class Rabbit extends Animal {
    constructor(name, eartlength) {
        super(name);
        this.eartlength = eartlength;
    }
    hide() {
        this.speed = 0;
        console.log(`${this.name} rabbit with earlength of ${this.eartlength}cm hided`);
    }
}
let rabbit = new Rabbit("Bunny", 10);
rabbit.run(45);
rabbit.hide();

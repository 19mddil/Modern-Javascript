// {
//     let animal = {
//         name: "Animal",
//         eat() {
//             console.log(`${this.name} eats`);
//         }
//     }
//     let rabbit = {
//         __proto__: animal,
//         eat() {
//             this.__proto__.eat.call(this); // super calling?
//         }
//     }
//     rabbit.eat();

//     let longEar = {
//         __proto__: rabbit,
//         eat() {
//             this.__proto__.eat.call(this);
//         }
//     }
//     longEar.eat();//current object is longEar as this.
// }
// When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
// Then super uses it to resolve the parent prototype and its methods.
{
    let animal = {
        name: "Animal",
        eat() {
            console.log(`${this.name} eats`);
        }
    }
    let rabbit = {
        name: "rabbit",
        __proto__: animal,
        eat() {
            super.eat(); // super calling?
        }
    }
    rabbit.eat();

    let longEar = {
        name: "long-ear-rabbit",
        __proto__: rabbit,
        eat() {
            super.eat();
        }
    }
    longEar.eat();//current object is longEar as this.
    // console.log(longEar.eat.[[HomeObject]] == longEar)
}
class Animal {
    eat() {
        console.log("eat");
    }
}
class Rabbit extends Animal {
    sayHi() {
        console.log("hi");
    }
}
console.log(Rabbit.__proto__ === Animal);//for built in method this not true
console.log(Rabbit.prototype.__proto__ === Animal.prototype);
let r = new Rabbit();
Rabbit.prototype.sayHi();//wtf
Rabbit.prototype.eat();
Animal.prototype.eat();
// Animal.prototype.sayHi();
r.sayHi();
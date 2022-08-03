let animal = {
    name : "animal",
    eat(){
        console.log(`the ${this.name} animal is eating`);
    }
}

function Rabbit(name){
    this.name = name;
}
Rabbit.prototype = animal;

let rabbit = new Rabbit("bunny");
rabbit.eat();
/**
If, after the creation, F.prototype property changes ( F.prototype = <another
object> ), then new objects created by new F will have another object as
[[Prototype]] , but already existing objects keep the old one.
 */
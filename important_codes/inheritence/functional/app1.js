{
    function Animal() {

    }

    let animal = new Animal();
    animal.eat = () => {
        console.log("it eats.");
    };
    animal.eat();

    function Cat(name) {
        this.name = name;
        console.log(this.name);
    }

    console.log(Cat.prototype.constructor.name);
    // Cat.prototype = animal; // activated when new Cat("XXX") is called

    console.log(Cat.prototype.constructor.name);

    let cat1 = new Cat("Lara");
    cat1 = Object.create(animal);
    cat1.eat();//it works
    console.log("here :" + cat1.name);

    console.log(cat1.constructor.name);
    cat1.constructor = Cat;//** fixed by only this line*/
    let cat2 = new cat1.constructor("Jasmin");// because the constructor is the function refers to Animal before.
    console.log("Here : " + cat2.name);// and shows undefined
    cat2 = Object.create(animal, {
        jumps: {
            value() {
                console.log(this.name, "I jumps bruh");//why the hell its not getting its name
            }
        },
    })
    cat2.eat();//it doesn't
    cat2.jumps();
    /**
     function User(name) {
        this.name = name;
    }
    User.prototype = {}; // (*)let user = new User('John');
    let user2 = new user.constructor('Pete');
    console.log( user2.name ); // undefined
    */
    /**
    1. First, it looks for constructor in user . Nothing.
    2. Then it follows the prototype chain. The prototype of user is User.prototype and it also has nothing.
    3. The value of User.prototype is a plain object {} , its prototype is Object.prototype . And there is Object.prototype.constructor == Object . So it is used instead of User.
     */
}
{
    /** A simple use of it */
    function Cat(name) {
        this.name = name;
        console.log("hi,", name, "cat");
    }
    console.log(Cat.prototype.constructor.name);
    let cat1 = new Cat("Lara");
    let cat2 = new cat1.constructor("Jasmin");
    /**it works perfect because Cat.prototype is Cat */
}
//Hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
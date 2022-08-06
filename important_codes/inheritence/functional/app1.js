// {
//     let animal = {
//         eat(){
//             console.log("It eats.");
//         }
//     }
    
//     function Cat(name){
//         this.name = name;
//         console.log(this.name);
//     }
    
    
//     console.log(typeof Cat.prototype);
    
//     console.log(Cat.prototype.constructor == Cat);
//     Cat.prototype = animal;
//     console.log(Cat.prototype.constructor == Cat);
    
//     console.log(Object.getOwnPropertyNames(Cat.prototype));
    
//     let cat1 = new Cat("Lara");
//     cat1.eat();//it works
    
//     let cat2 = new cat1.constructor("Jasmin");// because the constructor is the function refers to Cat.
//     // cat2.eat();//it doesn't
// }
{
    let animal = {
        eat(){
            console.log("It eats.");
        }
    }
    
    function Cat(name){
        
        //Cat.prototype = animal;
        this.name = name;
        console.log(this.name);
    }
    console.log(Cat.prototype.constructor == Cat);
    // Cat.prototype = animal;
    console.log(Cat.prototype.constructor);

    let cat1 = new Cat("Lara");
    cat1.__proto__ = animal;
    cat1.eat();//it works
    console.log(cat1.name);
    
    
    let cat2 = new cat1.constructor("Jasmin");// because the constructor is the function refers to Cat.
    cat2.__proto__ = animal;
    cat2.eat();//it doesn't
    console.log(cat2.name);//shows undefined

}



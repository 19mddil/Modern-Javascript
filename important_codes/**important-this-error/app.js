let user = {
    name: "Thomas",
    sayHi() {
        console.log(this.name + ", Hi!");
    }
}
user.sayHi();

//Here, user.sayHi not gives a value but a reference type like (user,"sayHi",true)

/*
The result of a property access user.hi is not a function, but a value of Reference Type. For
user.hi in strict mode it is: (user, "hi", true)

When the parentheses () are called on the Reference Type, they receive the full information
about the object and its method, and can set the right this ( =user in this case).

Reference type is a special “intermediary” internal type, with the purpose to pass information
from dot . to calling parentheses ().

Any other operation like assignment hi = user.hi discards the reference type as a whole,
takes the value of user.hi (a function) and passes it on. So any further operation “loses”
this.
*/

let hi = user.sayHi;
hi();
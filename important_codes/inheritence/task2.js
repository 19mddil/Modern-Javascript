{
    let dictionary = Object.create(null, {
        toString: { // define toString property
            value() { // the value is a function
                return Object.keys(this).join();
            }
        }
    });
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test";
    // apple and __proto__ is in the loop
    for (let key in dictionary) {
        console.log(key); // "apple", then "__proto__"
    }
    // comma-separated list of properties by toString
    console.log(dictionary); // "apple,__proto__"

}
{
    let dictionary = Object.create(null);
    // let dictionary = Object.create(null, {
    //     toString: {
    //         value() {
    //             return Object.keys(this).join();
    //         }
    //     }
    // });
    // your code to add dictionary.toString method
    // add some data
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__ is a regular property key here
    // only apple and __proto__ are in the loop

    Object.setPrototypeOf(dictionary, Object);
    Object.defineProperty(dictionary, toString, {
        value() {
            return Object.keys(this).join();
        }
    });
    for (let key in dictionary) {
        console.log(key); // "apple", then "__proto__"
        console.log(dictionary[key]);
    }
    console.log(dictionary); // "apple,__proto__"

}
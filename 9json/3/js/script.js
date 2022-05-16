var person1 = {
        "name": "Dilshad",
        "age": 25,
        "profession": "private tutor",
        "goal": "to open a software company",
    }
    // though it looks like json but its not when its hard coded in js code.
    // for example the following code will result in false

//console.log(JSON.parse(person1));

//fix
console.log(JSON.stringify(person1));
console.log(JSON.parse(JSON.stringify(person1)));
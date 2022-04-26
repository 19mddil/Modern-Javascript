//for-in string/array/object
//for-of string/array

let name = "I am learning javascript";
let food = ["cake", "chocolate", "Ice-cream"];

let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
};

for (var x in name) {
    //console.log(`name[${x}]=${name[x]}`);
}

for (var x of name) {
    console.log(`${x}`);
}

for (var y of food) {
    console.log(`${y}`);
}

for (var x in person) {
    console.log(`item ${x} has a value of ${person[x]}`);
}
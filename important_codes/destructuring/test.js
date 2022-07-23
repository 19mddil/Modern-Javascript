function showProfile({ age: a = "not given", name: n = "not given", degrees: [item1, item2], married: m = "not given" }) {
    console.log(`
    * The Persons,
    * name is ${n},
    * age is ${a},
    * degrees are ${item1} and ${item2},
    * and married is ${m} indeed
    `);
}

let person = {
    name: "Thomas Shelby",
    married: true,
    age: 29,
    degrees: ['warHero', 'mafia'],
}
showProfile(person);
//For more complex cases, the left side must have the same structure as the right one.
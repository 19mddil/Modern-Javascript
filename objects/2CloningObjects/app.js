//Doing it mannually
let user = {
    name: "Thomas Shelby",
    age: 29,
    occupation: "Ganster",
    organization: "Peaky Blinders",
}

let clone = new Object();

for (let key in user) {
    clone[key] = user[key];
}

console.log(clone);
clone.name = "Md.Dilshadul Islam";
console.log(user);
console.log(clone);
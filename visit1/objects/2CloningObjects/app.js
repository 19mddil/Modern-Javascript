//Doing it mannually
let user = {
    name: "Thomas Shelby",
    age: 29,
    occupation: "Ganster",
    organization: "Peaky Blinders",
}
let compUser = {
    name: "Thomas Shelby",
    age: 29,
    occupation: "Ganster",
    organization: "Peaky Blinders",
    distilary: {
        brand1: "Gin",
        brand2: "Whisky",
        brand3: "Rum",
    }
}

function test1() {
    let clone = new Object();

    for (let key in user) {
        clone[key] = user[key];
    }

    console.log(clone);
    clone.name = "Md.Dilshadul Islam";
    console.log(user);
    console.log(clone);

}
// test1();

let test2 = () => {
    let clone = Object.assign({}, user);
    clone.name = "Md.Dilshadul Islam"
    console.log(clone);
}

//test2();

let test3 = () => {
    let clone = Object.assign({}, compUser); // fails, needs deep cloning.
    console.log(clone);
    clone.distilary.brand2 = "Vodka";
    console.log("____________");
    console.log(compUser);
    console.log(clone);
};
// test3();

let test4 = () => {
    let clone = JSON.parse(JSON.stringify(compUser)); /// Owwwwwwwwwwww
    console.log(clone);
    clone.distilary.brand2 = "Vodka";
    console.log("____________");
    console.log(compUser);
    console.log(typeof(clone));

}
test4();
// let persons = [
//     { firstName: "Md.Dilshadul", lastName: "Islam" },
//     { firstName: "Simanta", lastName: "Paul" }
// ];

// function create(person) {
//     console.log(i + " INherre");
//     i++;

//     setTimeout(function() {
//         console.log(i + "here");
//         i++;
//         persons.push(person);
//     }, 4000);
// }

// var i = 1;

// function getAll() {
//     console.log(i + "IN");
//     i++;
//     setTimeout(function() {
//         console.log(i);
//         i++;
//         let output = '';
//         persons.forEach(function(person) {
//             output += `<li>${person.firstName} ${person.lastName}</li>`;
//             document.getElementById('output').innerHTML = output;
//         });
//     }, 3000);
// }
// create({ firstName: "Mariam", lastName: "Urmi" });
// getAll();
// getAll();
// getAll();

var i = 1;
let persons = [
    { firstName: "Md.Dilshadul", lastName: "Islam" },
    { firstName: "Simanta", lastName: "Paul" }
];

function create(person, callback) {
    console.log(i + "INhere");
    i++;
    setTimeout(function() {
        console.log(i + "here");
        i++;
        persons.push(person);
        callback();
    }, 4000);
}


function getAll() {
    console.log(i);
    i++;
    setTimeout(function() {
        console.log(i);
        i++;
        let output = '';
        persons.forEach(function(person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`;
            document.getElementById('output').innerHTML = output;
        });
    }, 3000);
}
create({ firstName: "Mariam", lastName: "Urmi" }, getAll);
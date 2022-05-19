let persons = [
    { firstName: "Md.Dilshadul", lastName: "Islam" },
    { firstName: "Simanta", lastName: "Paul" }
];

function create(person) {
    return new Promise(
        function(resolve, reject) {
            let f = 0;
            if (f == 0) {
                persons.push(person);
                resolve();
            } else {
                reject("Technical Issue;");
            }
        }
    );
}


function getAll() {
    setTimeout(function() {
        let output = '';
        persons.forEach(function(person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`;
            document.getElementById('output').innerHTML = output;
        });
    }, 3000);
}
create({ firstName: "Mariam", lastName: "Urmi" }).then(getAll).catch(function(err) {
    document.getElementById('output').innerHTML = '<h1>Technical Issue.</h1>';
});
class person {
    constructor(fname, lname, bday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = bday; //MM-DD-YYYY
    }

    calculateAge() {
        let diff = Date.now() - new Date(this.dob).getTime();
        let ageDate = new Date(diff);
        console.log(ageDate.getUTCFullYear());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person1 = new person("Robert", "Pattinson", "04-10-1934");
let person2 = new person("Zara", "Lerson", "02-22-1983");

console.log(person1.calculateAge());
console.log(person2.calculateAge());

/**
 * let person = {
    firstname: "Md.Dilshadul",
    lastname: "Islam",
    fullname: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
console.log(person.firstname);
person.fullname();

amna lekhla bar bar code likha class toiri korta hobe..

ar cha valo akta generic class person banaia pore
let person1 = new person(...,..., ....); kora valo
 */
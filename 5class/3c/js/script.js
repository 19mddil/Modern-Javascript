class Person1 {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    fullname() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    static functionName() {
        console.log(`This is a Person1 Class`);
    }
}

new Person1("Mojid", "Mia").fullname();
Person1.functionName();
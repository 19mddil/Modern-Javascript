let person = {
    firstname: "Md.Dilshadul",
    lastname: "Islam",
    fullname: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
console.log(person.firstname);
person.fullname();
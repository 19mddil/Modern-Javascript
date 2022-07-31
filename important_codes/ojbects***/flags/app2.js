let user = {
    firstName: "John",
    lastName: "Wick",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
console.log(user.fullName);
user.fullName = "Thomas Shelby";
console.log(user.fullName);

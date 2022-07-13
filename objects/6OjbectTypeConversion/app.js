let user = {
    name: "Thomas",
    age: 29,
    toString() {
        return this.name;
    },
    valueOf() {
        return this.age;
    }
}
console.log(String(user) + " shelby");
console.log(user * 2);
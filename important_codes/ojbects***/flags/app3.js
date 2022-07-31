function User(name, Birthday) {
    this.name = name;
    this.Birthday = Birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.Birthday.getFullYear();
        }
    });
}

let JohnyBoy = new User('John', new Date(1992, 6, 1));
console.log(JohnyBoy.Birthday);
console.log(JohnyBoy.age);
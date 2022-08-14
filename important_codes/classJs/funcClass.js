function gen(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}
class User extends gen("Hello") {

}
new User().sayHi();
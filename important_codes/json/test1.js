let user = {
    sayHi() {
        console.log("hi");
    },
    [Symbol("id")]: 123,
    something: undefined,
}
console.log(JSON.stringify(user));
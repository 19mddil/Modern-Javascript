{
    function say() {
        console.log(`Hello, ${this.name}`)
    }

    let user = {
        name: "john",
    }

    user.say = say;

    user.say();
}
{
    function say(greetings) {
        console.log(`${greetings}, ${this.name}`)
    }
    let user = { name: "thomas", };
    say.call(user, 'Welcome')
    console.log(user);
}
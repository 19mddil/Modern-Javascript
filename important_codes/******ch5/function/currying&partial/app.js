function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args); //user.say.call(this,phrase,time);
    }
}
let user = {
    name: 'John',
    say(time, phrase) {
        console.log(`[${time}] ${this.name}: ${phrase}`);
    },
}
let tme = new Date().getHours() + ':' + new Date().getMinutes();

user.sayNow = partial(user.say, tme);
user.sayNow("Hello");
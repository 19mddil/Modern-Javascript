let user = {
    name: "John",
    money: 1000,
}
user[Symbol.toPrimitive] = function (hint) {
    console.log(`hint : ${hint}`);
    return (hint == 'string' ? `${this.name}` : this.money);
}
console.log(`My ${user}`);
console.log(+user);
console.log(user + 500);/*not sure string or number so converts into default which implements as number! */
'use strict'
let _user = {
    name: "Thomas",
    money: 45000,
    toString() {
        return this.name;
    },
    valueOf() {
        return this.money;
    },
}
console.log(`My ${_user}`);
console.log(+_user);
console.log(_user + 500);
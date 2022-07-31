'use strict'
let user = {
    name: "John Wick",
    profession: "assasin",
    toString() {
        return this.name + ' the ' + this.profession;
    }
};
Object.defineProperties(user, {
    name: { writable: false },
    profession: { configurable: false },/*its now forever writable true and enurable true,not deletable*/
    toString: { enumerable: false },
});
console.log(Object.keys(user));
// user.profession = 'store keeper';
console.log(user);
// delete user.profession;
delete user.name;
console.log(user);
Object.defineProperties(user, {
    profession: { writable: false },
})
// user.profession = 'store keeper';
// console.log(user);
console.log(Object.getOwnPropertyDescriptors(user));
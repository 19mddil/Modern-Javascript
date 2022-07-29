'use strict'
function f() {
    console.log(this);
}
let admin = {
    name: 'sojib',
}
let user = {
    name: "thomas shelby",
}
console.log(f.bind(admin));
// user.g();

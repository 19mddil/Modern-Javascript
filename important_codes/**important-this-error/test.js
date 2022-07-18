'use strict'
function makeUser() {
    return {
        name: "john",
        ref: this,
    }
}
function makeRealUser() {
    return {
        name: "john",
        ref: function () {
            return this;
        }
    }
}
console.log(makeUser().ref);
/*
Here the value of this inside makeUser() is undefined , because it is called as a
function, not as a method with “dot” syntax.
*/
console.log(makeRealUser().ref());
/*
Now it works, because user.ref() is a method. And the value of this is set to the
object before dot .
*/
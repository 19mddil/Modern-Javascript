'use strict'
function makeWorker() {
    let name = "Pete";
    return function () {
        console.log(name);
    };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // what will it show? "Pete" (name where created) or "John" (name where called)?//pete
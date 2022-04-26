var a = 10;
a += 7;
console.log(a);
var a;
console.log(a);
var a = 0;
console.log(a);

/* Error
let a;
a = 8;
console.log(a);
*/
/* Error
let b;
b = b * 9;
let b = 8; 
*/

//const c = 7;
// error on reassigning c = 89;

// Global Scope

var a = 1;
let b = 2;
var d = 10;
const c = 3;

console.log(`Gobal Scope:`, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    var x = 99;
    console.log(`Functions Scope:`, a, b, c, d);

}
test();
console.log(`Global Scope: `, a, b, c);
//console.log(`Global Scope: `, a, b, c, x);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`if scope`, a, b, c);
}
console.log(`Global Scope:`, a, b, c);
/*
for (var a = 0; a < 10; a++) {

}
*/
for (let a = 0; a < 10; a++) {

}

console.log(`Global Scope:`, a, b, c);

var counter;
var cc;

function test() {
    counter = 10;
    var cc = 34;
    var xx = 89;
    console.log(counter, cc);
}
test();
console.log(counter, cc, xx);
var a = 20;
var b = a;
console.log(a);
console.log(b);
a = 30;
console.log(a);
console.log(b);
var c = a + b;
console.log(c);

//double declaration
var b = 20;
console.log("b = " + b);
var b;
console.log("b = " + b); // no value will be lose.
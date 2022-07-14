var x;
x = 123e5;//123*10**5
console.log(x);
console.log("34"+"45");
console.log(34+"45");
console.log("34"+45);
console.log(34+45+"45");
console.log("The result: "+34+45);
console.log("25" - "5");
console.log("25"/"5");
console.log("25"*5);
var y = 25/0;
console.log("y = "+y);
var z = Infinity;
console.log(z);
var x = 0xBB;
console.log(x);
var xString = x.toString();
console.log(xString);
//converting to different base of numbers
var xx = 187;
console.log(xx.toString(2));
console.log(xx.toString(4));
console.log(xx.toString(8));
console.log(xx.toString(16));
x = 3.1416;
y = x.toPrecision(4);
console.log(y);
var a = 187;
var b = a.toString();
var c = parseInt(b);
console.log(c);
y = "3.1416";
var c = parseInt(y);
console.log(c);
c = parseFloat(y);
console.log(c);

var x = "Cat";
console.log(isNaN(x));
x = 188;
console.log(isNaN(x));

x = "1234";
console.log(isNaN(x));


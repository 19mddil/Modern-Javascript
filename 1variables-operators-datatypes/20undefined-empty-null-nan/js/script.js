//undefined means not declaring a variable value
document.write("hello");
var a;
console.log("value of a is "+ a);
console.log(a == undefined);
console.log(a === undefined);//both value and type
a = null
console.log(a);
console.log(null == undefined);
console.log(null === undefined);
var b = "" //empty value
console.log(b);
console.log(a == b);
console.log(null == "");
console.log(undefined == "");
var c = "abc"/10; // NaN is set on a failed mathematical operation
console.log(c);
console.log(NaN == null);
console.log(NaN == undefined);
console.log(NaN == "");




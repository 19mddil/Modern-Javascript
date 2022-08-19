let toString = Object.prototype.toString;
let arr = {};
console.log(toString.call(arr));
console.log(toString.call(124));
console.log(toString.call("Md.Dilshad"));
console.log(toString.call(true));
console.log(toString.call(null));
console.log(toString.call([1, 2, 3]));
if (toString.call(124) === "[object Number]") {
    console.log("hello");
}
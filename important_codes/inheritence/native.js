let obj = {};

console.log(obj.__proto__ === Object.prototype);

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr);

function f() { }

console.log(f.__proto__ === Function.prototype);

//PollyFilling

if (!String.prototype.rpeat) {
    String.prototype.rpeat = function (n) {
        return new Array(n + 1).join(this);
    }
}
console.log("La".rpeat(3));

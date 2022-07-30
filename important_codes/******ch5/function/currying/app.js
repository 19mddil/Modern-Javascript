function curry(func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        }
    }
}
function sum(a, b) {
    return a + b;
}
let carriedSum = curry(sum);
console.log(carriedSum(1)(2));
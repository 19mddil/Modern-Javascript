let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1, 3));
let arr = ['a', 'b', 'return a*b'];
let mul = new Function(...arr);
console.log(mul(3, 4));
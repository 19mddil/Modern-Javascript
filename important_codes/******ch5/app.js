let arr = ["i", 'study', 'javascript', 'right', 'now'];
// console.log(arr);
let arr2 = ['which', 'is', 'a', 'gorgeous', 'language'];
arr.splice(3, 0, ...arr2);
console.log(arr);
let str = "hello";
let strTest = new Set([...str]);
console.log(strTest);
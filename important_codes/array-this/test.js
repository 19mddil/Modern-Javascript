// let arr = ['a', 'b'];
// arr.push(
//     function () {
//         console.log(this);
//     }
// );
// arr[arr.length - 1]();//returns array

// let fruits = ['apple', 'orange', 'guava'];
// let temp = fruits.splice(1, 1, 'stawberry', 'jackfuits');
// temp = fruits.splice(0, 0, temp);
// console.log(fruits);
// console.log(temp);

// let arrayLike = {
//     0: "Thomas",
//     1: "shelby",
//     length: 5,
//     [Symbol.isConcatSpreadable]: false,
// }
let arr = [1, 2];
// console.log(arr.concat(arrayLike, [5, 6])[2].length);
let arrayLike = {
    0: "Thomas",
    1: "shelby",
    [Symbol.isConcatSpreadable]: true,
    length: 3,
}
arr = arr.concat(arrayLike, [5, 6]);
'use strict'
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr1 = ['scar', 'm416', 'bar'];
let arr2 = ['ak47', 'kalasnikov', 'p30'];

let temp = arr1.splice(1, 1);
console.log(arr1);

arr2.forEach((item, index) => {
    arr1.splice(index + 1, 0, item);
})
console.log(arr1 = arr1.concat(temp));
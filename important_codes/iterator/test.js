let str = 'Bangladesh';

let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     console.log(result.value);
// }
// let result = iterator.next();
// if (!result.done) {
//     do {
//         console.log(result.value);
//         result = iterator.next();
//     } while (!result.done)
// }
let result;
while ((result = iterator.next()).done == false) {
    console.log(result.value);
}

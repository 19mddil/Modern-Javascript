// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(
//     result => console.log(result), error => console.log(error)
// );

// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(reject(new Error("whoops")), 1000);
// });
// promise1.then(
//     result => console.log(result), error => console.log(error)
// );

// //if we are only interested in result
// let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });

// promise2.then(
//     result => console.log(result), null
// );

// // //if we are only interested in error

// let promise3 = new Promise(function(resolve, reject) {
//     setTimeout(reject(new Error("whoops")), 1000);
// });
// promise3.then(
//     null,
//     error => console.log(error)
// );

let promise4 = new Promise((resolve, reject) => setTimeout(reject(new Error("something is wrong")), 1000));

promise4.finally(() => console.log("error is found")).catch(error => (console.log(error))); //finally runs whenever promise is settled regardless of resolve or reject

//an immediately settled promise

let promise5 = new Promise(resolve => resolve("done!")); //takes function as arg then use that function!
promise5.then(result => console.log(result));

// new promise6((resolve, reject) =>
//     throw new Error("error")).finally(() => console.log("promise ready")).catch(err => console.log(err));
new Promise(function (resolve, reject) {
    // setTimeout(() => {
    //     reject(new Error("Whoops"));
    //     // throw new Error("whoops");
    // }, 3000)
    throw new Error("whoops");
}).catch(error => console.log("here" + error));
// function test() {
//     throw new Error("LaLa");
// }
// test();
console.log("hello");

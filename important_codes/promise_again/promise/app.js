let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
})
promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops something failed")), 1000);
})
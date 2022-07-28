function sayHi() {
    console.log(++sayHi.counter + ". Hello, man!");
}
sayHi.counter = 0;
let timerid = setInterval(sayHi, 1000);
setTimeout(() => {
    clearInterval(timerid);
    console.log("done!");
}, 6000);


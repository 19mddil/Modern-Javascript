function f(x) {
    console.log(x);
}

function delay(func, dly) {
    return function (x) {
        setTimeout(() => func.call(this, x), dly);
    }
}

let f1000 = delay(f, 2000);
let f1500 = delay(f, 2000);
f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
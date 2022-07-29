function f(arg) {
    console.log(arg);
}
function debounce(func, ms) {
    let permission = true;
    return function (x) {
        if (permission == false) {
            return;
        }
        func.call(this, x);
        permission = false;
        setTimeout(() => permission = true, ms);
    }
}
f = debounce(f, 1000);
f(1);
f(2);
setTimeout(() => f(3), 400);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
function work(a, b) {
    console.log(a + b); // work is an arbitrary function or method
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}
work = spy(work);
work(1, 2);// 3
work(4, 5);// 9
console.log(work.calls);
for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
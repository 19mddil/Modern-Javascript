async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield await new Promise(resolve => setTimeout(() => { resolve(i) }, 1000));
    }
}
async function caller() {
    for await (let value of generateSequence(1, 5)) {
        console.log(value);
    }
}
caller();
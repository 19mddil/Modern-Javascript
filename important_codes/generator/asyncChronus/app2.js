let range = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]: async function* () {
        for (let i = this.from; i <= this.to; i++) {
            yield await new Promise(resolve => setTimeout(() => { resolve(i) }, 1000));
        }
    }
}
async function caller() {
    for await (let value of range) {
        console.log(value);
    }
}
caller();
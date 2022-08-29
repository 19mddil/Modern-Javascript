let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function* () {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
}
console.log([...range]);
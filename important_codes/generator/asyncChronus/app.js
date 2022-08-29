let range = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() {
                if (this.current <= this.last) {
                    // let x = await new Promise(resolve => setTimeout(() => { resolve(this.current++) }, 1000));
                    // console.log(x);
                    let x = await new Promise(resolve => setTimeout(() => { resolve({ done: false, value: this.current++ }) }, 1000));
                    console.log(x);
                    return x;
                    // return { done: false, value: x };
                } else {
                    return { done: true };
                }
            }
        }
    },
}

async function caller() {
    for await (let value of range) { // (4)
        console.log(value); // 1,2,3,4,5
    }
}
caller();
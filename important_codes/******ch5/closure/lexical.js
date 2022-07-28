function makeCounter() {
    let count = 0;
    return function counter() {
        return count++;
    }
}
let c = makeCounter();///uffff now I understand
console.log(c());
console.log(c());
console.log(c());
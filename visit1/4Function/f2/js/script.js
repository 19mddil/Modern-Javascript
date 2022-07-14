function addNum(p1, p2) {
    console.log(`${p1}+${p2}=${p1+p2}`);
    return p1 + p2;
}

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(addNum(3.9, 90));
console.log(add(1, 3.4, 5, 90.89, 0.998));
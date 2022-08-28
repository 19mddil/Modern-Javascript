function* generatorSeq() {
    yield 1;
    yield 2;
    return 3;
}
let gs = generatorSeq();
let i;
i = gs.next();
while (!i.done) {
    console.log(i.value);
    i = gs.next();
    flag = i.done;
}
console.log(i.value);

//or

for (let value of generatorSeq()) {
    console.log(value);// but it doesn't show 3 :(
}

//Using spread operator

let seq = [0, ...generatorSeq()];
console.log(seq);
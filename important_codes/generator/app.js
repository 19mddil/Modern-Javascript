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
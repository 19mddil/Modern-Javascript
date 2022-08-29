function* gen() {
    let ask = yield "2 + 2?";
    console.log(ask);
    let ask1 = yield "3 * 3?";
    console.log(ask1);
    let ask3 = yield "4 + 4?";
    console.log(ask3);
}
let genarator = gen();
console.log(genarator.next().value);//"2 + 2?";
//4
console.log(genarator.next(4).value);//"3 * 3?";
//9
console.log(genarator.next(9).value);//"4 + 4?";
//8
console.log(genarator.next(8).done);//true;s


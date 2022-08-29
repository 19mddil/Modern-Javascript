function* gen() {
    let ask = yield "2 + 2?";
    console.log(ask);
    try {
        let ask1 = yield "3 * 3?";
        // console.log(ask1);
    } catch (err) {
        console.log(err.message);
    }
    try {
        let ask3 = yield "4 + 4?";
        console.log(ask3);
    } catch (err) {
        console.log(err.message);
    }
}
try {

    let genarator = gen();
    console.log(genarator.next().value);//"2 + 2?";
    //4
    console.log(genarator.next(4).value);//"3 * 3?";
    genarator.throw(new Error("Made up"));
    //9
    console.log(genarator.next().value);//"4 + 4?";
    //8
    console.log(genarator.next(8).done);//true;s
} catch (err) {
    console.log(err);
}


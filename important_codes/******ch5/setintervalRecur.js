function request(runtime, messeage, problem) {
    let timeId;
    runtime += 1000;
    let delay = 1000;
    if (problem.id1 == true) {
        delay = 2000;
    }
    if (problem.id2 == true) {
        delay = 5000;
    }
    function sayHi() {
        console.log(++sayHi.counter + `. ${messeage}`);
        timeId = setTimeout(sayHi, delay);
    };
    sayHi.counter = 0;
    timeId = setTimeout(sayHi, delay);//the caller
    setTimeout(() => { clearTimeout(timeId) }, runtime);
}
request(10000, "A Blessed Day!", { id1: false, id2: false, });

// let timeId;
// let problem = true;
// let delay = 1000;
// function sayHi() {
//     console.log(++sayHi.counter + ". Hello, man!");
//     timeId = setTimeout(sayHi, delay);
// }
// sayHi.counter = 0;
// timeId = setTimeout(sayHi, delay);
// setTimeout(() => { clearTimeout(timeId) }, 11000);

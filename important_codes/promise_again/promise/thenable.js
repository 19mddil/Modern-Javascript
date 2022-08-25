class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        setTimeout(() => resolve(this.num * 2), 1000);//**
    }
}
new Promise(resolve => resolve(1))
    .then(result => new Thenable(result)) //*
    .then(result => console.log(result));

/*
JavaScript checks the object returned by .then handler in the line (*) : if it has a callable
method named then , then it calls that method providing native functions resolve ,
reject as arguments (similar to executor) and waits until one of them is called. In the
example above resolve(2) is called after 1 second (**) . Then the result is passed
further down the chain.
This feature allows to integrate custom objects with promise chains without having to inherit
from Promise.
 */
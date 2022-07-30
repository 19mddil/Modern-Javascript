{
    function sayHi(who) {
        console.log(`hi, ${who}`);
    }
    function defer(f, ms) {
        return function () {
            setTimeout(() => f.apply(this, arguments), ms)
        }
    }
    //Allah sayed to me to stay honest, it will help
    let sayHiDeffered = defer(sayHi, 2000);
    sayHiDeffered("John");
}
{
    function sayHi(who) {
        console.log(`hi, ${who}`);
    }
    function defer(f, ms) {
        let ctx = this;
        return function (...args) {
            setTimeout(function () { f.apply(ctx,args) }, ms)
        }
    }
    //Allah sayed to me to stay honest, it will help
    let sayHiDeffered = defer(sayHi, 2000);
    sayHiDeffered("John");
}
{
    // let sum = new Function('a', 'b', 'return a+b');
    // console.log(sum(1, 3));
    // let arr = ['a', 'b', 'return a*b'];
    // let mul = new Function(...arr);
    // console.log(mul(3, 4));
}
{
    // function hash(...args) {
    //     return args.join(',');
    // }
    // console.log(hash(2, 3, 4, 5));
    function tt() {
        console.log(arguments[0]);
        console.log(arguments[1]);
    }
    tt(3, 4, 5, 6);
    // let ttt = '2,3';
    // console.log(Array.from(ttt.split(',')));
    // function sum(min, max) {
    //     console.log(min, max)
    //     console.log(+min + +max);
    // }
    // sum(...[].join.call(ttt.split(',')));
}
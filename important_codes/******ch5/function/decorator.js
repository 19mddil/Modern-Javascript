// {
//     function slow(num) {
//         //function do something heavy cpu consuming task,
//         return num;
//     }

//     function decorator(func) {
//         let cache = new Map();

//         return function (x) {
//             if (cache.has(x)) {
//                 return cache.get(x);
//             }
//             let result = func(x);
//             cache.set(x, result);
//             return result;
//         }
//     }

//     slow = decorator(slow);

//     console.log(slow(1));
//     console.log(`Again ${slow(1)}`);
// }
// {
//     let worker = {
//         someMethod() {
//             return 1;
//         },
//         slow(x) {
//             return x * this.someMethod();
//         }
//     }
//     function decorator(func) {
//         let cache = new Map();

//         return function (x) {
//             if (cache.has(x)) {
//                 return cache.get(x);
//             }
//             let result = func.call(this, x);
//             // let result = func(x);
//             console.log(result);
//             cache.set(x, result);
//             return result;
//         }

//     }
//     worker.slow = decorator(worker.slow);
//     console.log(worker.slow(1));
//     console.log(`Again ${worker.slow(1)}`);
// }
{
    // let worker = {
    //     slow(min, max) {
    //         return +min + +max;
    //     }
    // }
    // function decorator(func, hash) {
    //     let cache = new Map();
    //     return function (...x) {
    //         x = hash(x);
    //         console.log(typeof x);
    //         if (cache.has(x)) {
    //             console.log(x);
    //             return cache.get(x);
    //         }
    //         let result = func.call(this, ...Array.from(x.split(',')));
    //         // let result = func(x);
    //         console.log(result);
    //         cache.set(x, result);
    //         return result;
    //     }

    // }
    // function hash(...args) {
    //     return args.join(',');
    // }
    // worker.slow = decorator(worker.slow, hash);
    // console.log(worker.slow(1, 2));
    // console.log(`Again ${worker.slow(1, 2)}`);
}
{
    let worker = {
        slow(min, max) {
            return +min + +max;
        }
    }
    function decorator(func, hash) {
        let cache = new Map();
        return function () {
            x = hash(arguments);
            console.log(x);
            if (cache.has(x)) {
                return cache.get(x);
            }
            let result = func.apply(this, Array.from(x.split(',')));
            // let result = func.apply(this, Array.from(x.split(',')));
            cache.set(x, result);
            return result;
        }

    }
    function hash() {
        return arguments[0][0] + ',' + arguments[0][1];// now I get it what was the mistake here
    }
    worker.slow = decorator(worker.slow, hash);
    console.log(worker.slow(1, 2));
    console.log(`Again ${worker.slow(1, 2)}`);
}
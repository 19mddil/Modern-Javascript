'use strict'

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
let logright = curry(log);
logright(new Date())("debug")("hello");

let logNow = logright(new Date());
logNow("debuged", "testing");

let debugNow = logNow("debug");
debugNow("hey, Man!");
let ucFirst = function (param) {
    return param[0].toUpperCase() + param.slice(1);
}
console.log(ucFirst("bangladesh"));

let checkSpam = function (param) {
    let s = param.toLowerCase();
    return s.includes("viagra") || s.includes("xxx");
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

let truncate = function (param, max) {
    let l = param.length;
    if (l > max) {
        let s = param.slice(0, max - 1) + '...';
        return s;
    }
    return param;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

let extractCurrencyValue = function (param) {
    return param.slice(1).trim();
}
console.log(extractCurrencyValue('$120'));
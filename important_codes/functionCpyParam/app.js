function showMessege(from, text) {
    from = '*' + from + '*';
    console.log(from + ' ' + text);
}
let from = "Ann";
showMessege(from, "hi");
console.log(from); // the value of "from" is the same, the function modified a local copy
//If a parameter is not provided, then its value becomes undefined
showMessege("Jami");

function showMessege(from, text = "no text given") {
    from = '*' + from + '*';
    console.log(from + ' ' + text);
}
showMessege("Jami"); //wah incredible
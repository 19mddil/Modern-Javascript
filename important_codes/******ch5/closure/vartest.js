function sayHi() {
    var phrase = "Hello"; // local variable, "var" instead of "let"
    console.log(phrase); // Hello
}
sayHi();
console.log(phrase); // Error, phrase is not defined
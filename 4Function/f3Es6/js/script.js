//Normal function
function saysomething() {
    console.log("Hello World.");
}
// function expression

let saysomething1 = function() {
    console.log("hello world again.");
}



//Arrow Function(ES6)
let saysomething2 = (num1, num2) => {
    //console.log(num1 + num2);
    return num1 + num2;
}

let saysomething3 = num1 => {
    return num1 % 10;
}

let a = (name) => {
    return (age) => {
        console.log(`the:`, name, age);
    }
}
a("Rahim")(34);



saysomething();
saysomething1();
console.log(saysomething2(1, 4));
console.log(saysomething3(34));
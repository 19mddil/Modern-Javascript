// function min(a, b) {
//     return (a > b) ? b : a;
// }
// console.log(min(1, 2));
// console.log(min(4, 4));
// console.log(min(5, 4));

// function pow(a, n) {
//     return a ** n;
// }
// console.log(pow(3, 3));
// console.log(pow(2, 5));

function sayHi() {
    console.log("hi");
}
let func = sayHi();

console.log(func); // as I suspected undefined

func = sayHi;
func();
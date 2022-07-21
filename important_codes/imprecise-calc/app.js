// console.log(1e500);
// console.log(typeof Infinity); //number

// console.log(0.1 + 0.2 == 0.3);
// console.log(0.1 + 0.2);
// console.log("0.1" + "0.2" == "0.3");
// console.log(0.1 + "0.2");
// console.log(+0.1.toFixed(1) + +0.2.toFixed(1)); //the result of toFixed is a string

// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(2));

// console.log(9999999999999999);
// //NaN does not equal to anything including itself

// console.log(NaN == NaN); //So, isNaN() is necessary
// console.log(NaN === NaN); // don't try to covert into number
// console.log(Object.is(NaN, NaN));//handy
// console.log(0 === -0);
// console.log(0 == 0);
// console.log(Object.is(0, -0));

// //In all other cases, Object.is(a, b) is the same as a === b .

// console.log(+" ");
// console.log(+"");

// console.log(+"100px");
// console.log(parseInt("100px"));
// console.log(parseFloat("12.3.448Ml0"));
// console.log(parseInt("$1000"));

// for (let i = 0; i < 10; i++) {
//     console.log(Math.floor(Math.random() * 10 + 1));
// }

// console.log(6.35.toFixed(1));
// console.log(6.35.toFixed(20));
// console.log(Math.round(6.35 * 10) / 10);

let i = 0;
while (i != 10) {
    i = i + 0.2;
    i = Math.round(i * 10) / 10;
}
console.log("succeeded");
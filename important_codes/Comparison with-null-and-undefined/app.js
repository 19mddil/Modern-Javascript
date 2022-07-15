console.log(null === undefined); //false,strict comparison
console.log(null == undefined ); // they are only equal to each other but nothing else so true
console.log( null >= 0); // mathematically evaluated so null is 0 and true
console.log(null > 0);// mathematically evaluated so null is not greater than 0 but 0 , so false
console.log(null == 0);// null is only equal to undefinded so false, == is not a mathematical oparand so is not converted to 0


// undefinded in mathematical operations turns into NaN
// undefinded is only equal to null in ==

5 > 4 // true
"apple" > "pineapple" //false
"2" > "12" // false
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false
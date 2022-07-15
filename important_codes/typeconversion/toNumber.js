let age = Number("Twenty Five");// NaN
//If the string is not a valid number, the result of such a conversion is NaN . For instance:
// console.log(age);
// console.log(age == undefined);
age = Number(undefined);// NaN
age = Number(null);//0
age = Number(true);//1
age = Number(false);//0
age = Number("  ");
age = Number(" ");
age = Number("   ");
age = Number("      ");//0
age = Number(" 9904        ");//9904
age = Number(" 9904        6");//NaN

console.log(age);


console.log(2 + 5 + 89 + '8' + 88);//'96888'
console.log('8' + 2 + 5 + 89 +  88);//'8258988'
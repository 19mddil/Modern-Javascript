//Primitive Types(Deals with values)
//number,string,boolean

let a = 7;
let b = a;
a = 45;
console.log(a);
console.log(b);

var c = 7;
var d = c;
c = 45;
console.log(c);
console.log(d);

//Reference Types(Deals with memory address)
//array,object

let numbers = [1,2,3];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 500;
console.log(newNumbers);
//if newNumbers would change same would apply to numbers also



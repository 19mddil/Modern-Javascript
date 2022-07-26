//var can be functionally scoped or globally
//but var pierces through if and for loops alike codeblocks

function sayHi() {
    var x = 'never do that';
    console.log(x);
}
sayHi();
//console.log(x);//error
let i = 5;
if (i > 3) {
    var j = 89;
    let k = 68;//will cause error
    console.log(i);
}
console.log(j);
// console.log(k);

for (var m = 0; m < 3; m++) {
    console.log(m);
}
console.log(m);
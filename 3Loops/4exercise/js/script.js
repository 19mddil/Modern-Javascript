var x = parseInt(prompt("Enter the number of terms: "));
var s = 0;
var str = "The summation of ";
for (var i = 1; i <= x; i++) {
    s += i * i;
    str += i * i.toString();
    if (i < x) {
        str += " + ";
    }
}
console.log(`${str} = ${s}`);
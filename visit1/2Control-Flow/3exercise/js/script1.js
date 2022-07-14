var x = prompt("Enter the fisrt Number");
var y = prompt("Enter the second Number");

var flag = 0;
if (!isNaN(x) && !isNaN(y)) {
    x = parseFloat(x);
    y = parseFloat(y);
    flag = 1;
}
if (flag == 1) {
    var num;
    var option;
    var result;
    num = prompt("1.Add\n2.Substract\n3.Multiply\n4.Devide\n");
    switch (num) {
        case "1":
            result = x + y;
            break;
        case "2":
            result = x - y;
            break;
        case "3":
            result = x * y;
            break;
        case "4":
            if (y == 0) {
                result = "undefined";
            } else {
                result = x / y;
            }
            break;
        default:
            result = "not determinded";
            break;
    }
    console.log("The result is " + result);
} else {
    console.log("Input again the numbers!");
}
var num = prompt("What is your number?");
//console.log(num);
num = parseInt(num);
//console.log(typeof num);
var grade;
console.log(80 <= num && num <= 100);

switch (true) {
    case (80 <= num && num <= 100):
        grade = "A+";
        break;
    case (70 <= num && num < 80):
        grade = "A";
        break;
    case (60 <= num && num < 70):
        grade = "B";
        break;
    case (50 <= num && num < 60):
        grade = "C";
        break;
    case (40 <= num && num < 50):
        grade = "D";
        break;
    case (33 <= num && num < 40):
        grade = "E";
        break;
    case (0 <= num && num < 33):
        grade = "F";
        break;
    default:
        grade = "not validated for given input :(";
        break;
}
console.log("Your grade is " + grade);
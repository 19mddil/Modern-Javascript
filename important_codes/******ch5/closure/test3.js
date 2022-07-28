// function sum(x) {
//     return function (z) {
//         return x + z;
//     }
// }
// console.log(sum(101)(102));

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let x = i;
        let shooter = function () { // shooter function

            console.log(x); // should show its number
        };

        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0](); // the shooter number 0 shows 10
army[1](); // and number 5 also outputs 10...
    // ... all shooters show 10 instead of their 0, 1, 2, 3...
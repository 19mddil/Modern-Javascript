// Array iteration with function using for each
let printeverything = function(value, index, arr) {
    console.log(value);
}

var goods = ["whisky", "rum", "scotch", "beer"];

goods.forEach(printeverything);

var nums = [1, 2, 3, 4, 5];

let getSquare = function(value) {
    return value * value;
}
let squredNum = nums.map(getSquare);

squredNum.forEach(printeverything);
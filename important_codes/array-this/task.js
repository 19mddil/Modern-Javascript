// camelize() == 'backgroundColor';
// camelize("") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// let camelize = function (str) {
//     let words = str.split('-');
//     let i;
//     for (words[0] != '' ? i = 1 : i = 2; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');

// }
// let camelize1 = src => src.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// console.log(camelize1("list-style-image"));
// console.log(camelize1("background-color"));
// console.log(camelize1("-webkit-transition"));

// let arr = [5, 3, 8, 1];
// let filterRange = function (arr, a, b) {
//     // let temp = [];
//     // for (let item of arr) {
//     //     if (item >= a && item <= b) {
//     //         temp.push(item);
//     //     }
//     // }
//     // return temp;
//     return arr.filter(item => item >= a && item <= b);
// }
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map(item => item.name);
// console.log(names); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [john, pete, mary];
// let usersMapped = users.map(function (user) {
//     return { fullName: user.name + ' ' + user.surname, id: user.id };
// // })
// console.log(usersMapped);
// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // John Smith
let test = function () {
    let sortByAge = function (arr) {
        return arr.sort((a, b) => a.age - b.age);
    }
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let arr = [pete, john, mary];
    sortByAge(arr);
    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
    console.log(arr);
};
test();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let temp = arr.filter(item => item < 5.5);

console.log(temp);
let test1 = () => {

    let man = {
        age: 18,

    }
    let users = [
        { age: 21 },
        { age: 12 },
        { age: 56 },
        { age: 14 },
        { age: 78 },
        { age: 17 },
    ];

    temp = users.filter(item => item.age < man.age);
    console.log(temp);
}
//test1();
let test2 = () => {
    temp = null;
    let man = {
        age: 18,
        younger: function (user) {
            return user.age < this.age;
        }

    }
    let users = [
        { age: 21 },
        { age: 12 },
        { age: 56 },
        { age: 14 },
        { age: 78 },
        { age: 17 },
    ];

    temp = users.filter(man.younger, man);
    console.log(temp);
}
test2();
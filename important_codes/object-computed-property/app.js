let fruit = "apple"; //say we get as input

let bag = {
    [fruit]: 5,
}
console.log(bag.apple);

bag.__proto__ = 7;
console.log(bag.__proto__);
console.log(null == undefined);

const user = {
    name: "Karim",
}
user.age = 45;

console.log(user);

let demoUser = user;

console.log(demoUser);

user = {
    name: "montu",
}
console.log(user);
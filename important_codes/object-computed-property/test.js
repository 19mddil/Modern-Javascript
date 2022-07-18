

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === typeof 1) {
            obj[key] = obj[key] * 2;
        }
    }
}
console.log(menu);
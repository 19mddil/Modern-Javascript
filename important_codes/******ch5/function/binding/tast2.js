function f() {
    console.log(this);
}
let p1 = {
    name: "thomas shelby",
};
let p2 = {
    name: "arthur shelby",
};
let p3 = {
    name: "john shelby",
}
f = f.bind(p1);
f = f.bind(p2);
f = f.bind(p3);
f();
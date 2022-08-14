let User = class {
    sayHi() {
        console.log("Hello");
    }
}
new User().sayHi();

let Admin = class Admin_Panel {
    sayHi() {
        console.log(Admin_Panel);
    }
}
new Admin().sayHi();
console.log(Admin);
console.log(Admin_Panel);
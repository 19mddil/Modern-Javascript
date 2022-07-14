let test1 = () => {
    let user = {
        name: "Rahim",
        sayName() {
            console.log(user.name);
        }
    }
    user.sayName();
    let admin = user; // copying the address not object
    user = null;
    admin.sayName();
}
let test2 = () => {
    let user = {
        name: "Rahim",
        sayName() {
            console.log(this.name);
        }
    }
    user.sayName();
    let admin = user; // copying the address not object
    user = null;
    admin.sayName();
}

function test3() {
    let user = {
        name: "Rahim",
        sayName() {
            console.log(this);
        }
    }
    let user1 = {
        name: "karim",
        sayName() {
            console.log(this);
        }
    }
    user.sayName();
    user1.sayName();
    console.log("????????????????????");
    console.log(this);
}

let test4 = () => {
        let user = {
            name: "Thomas",
            hi() {
                console.log("hi", this.name);
            },
            bye() {
                console.log("bye");
            },
        }
        user.name === "Thomas" ? user.hi() : user.bye();
    }
    // test1();
    // console.log("????????????????????");
    // test2();
    // console.log("????????????????????");
    //test3();
test4();
// {
//     let user = {
//         name: "john",
//         sayHi() {
//             console.log(`${this.name},Hi!`)
//         }
//     }
//     setTimeout(user.sayHi, 2000);
// }
// {
//     let user = {
//         name: "john",
//         sayHi() {
//             console.log(`${this.name},Hi!`)
//         }
//     }
//     setTimeout(() => user.sayHi(), 2000);
// }
{
    let user = {
        name: "john",
        sayHi() {
            console.log(`${this.name},Hi!`)
        }
    }
    let sayHi = user.sayHi.bind(user);
    setTimeout(sayHi, 2000);
    user = {
        sayHi() {
            console.log("O la la la");
        }
    }
}
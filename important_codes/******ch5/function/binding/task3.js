
let user = {
    name: 'John',
    loginOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};
function askPassword(ok, fail, obj) {
    // let password = 'rckstar';
    // // ok.bind(obj);
    // // fail.bind(obj);
    // if (password == "rockstar") ok.call(obj);
    // else fail.call(obj);
    ok = ok.bind(obj);
    fail = fail.bind(obj);
    let password = 'rckstar';
    if (password == "rockstar") ok();
    else fail();
}
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(user.loginOk, user.loginFail, user);
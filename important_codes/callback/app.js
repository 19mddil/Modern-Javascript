function ask(ans, yes, no) {
    if (ans === "yes") {
        yes();
    } else {
        no();
    }
}

// function showOk() {
//     console.log("you agreed");
// }

// function showCancel() {
//     console.log("you canceled");
// }
// ask("no", showOk, showCancel);
ask('yes', function() { console.log("you agreed") }, function() { "you didn't agreed" });
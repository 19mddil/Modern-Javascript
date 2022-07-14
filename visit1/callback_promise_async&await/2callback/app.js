function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("you agreed");
}

function showCancel() {
    alert("you canceled");
}
ask("do you agree?", showOk, showCancel);

//here showOk is a callback for yes and showCancel is a callback for no
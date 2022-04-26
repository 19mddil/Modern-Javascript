/*
function message(e) {
    let val = e;
    val = e.target.id;
    val = e.timeStamp;
    val = e.clientX;
    val = e.clientY;
    val = e.offsetX;
    val = e.offsetY;
    console.log(this.id);
}

function printXY(e) {
    this.style.background = `#${e.offsetX}`;
    console.log(`${e.offsetX} ${e.offsetY}`);
}
document.getElementById('click-button').addEventListener('click', message);

let a = document.querySelector(".container");
a.style.background = 'grey';
a.addEventListener('mousemove', printXY);
*/
let val = document.querySelector('#name');

function messege(e) {
    document.querySelector('#text').innerText = this.value; //e.target
}

function messege2(e) {
    console.log(e.type == 'focus');
    if (e.type == 'focus') {
        this.style.background = 'pink';
    } else {
        this.style.background = 'white';
    }
}
val.addEventListener('keyup', messege);
val.addEventListener('focus', messege2);
val.addEventListener('focusout', messege2);
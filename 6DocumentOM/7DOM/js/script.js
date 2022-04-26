function message() {
    console.log('hi, buttons been clicked');
}
document.getElementById('double-click-button').addEventListener(
    'dblclick', message2
);


function message2() {
    console.log('hi,buttons been double clicked');
}
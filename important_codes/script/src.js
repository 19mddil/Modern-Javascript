function hello(name = "John") {
    let phrase = `Hello, ${name}`;
    tell(phrase);
}

function tell(phrase) {
    console.log(`** ${phrase} **`);
}
console.log("There will be an error")

[1, 2].forEach(item => console.log(item))

/**
 * The error in the no-semicolon variant occurs because JavaScript does not assume a
semicolon before square brackets [...]

Here’s how the engine sees it:
alert("There will be an error")[1, 2].forEach(alert)

so its safer to put a semi colon
 */
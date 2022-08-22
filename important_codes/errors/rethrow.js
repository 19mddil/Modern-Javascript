function readData() {
    let json = '{ "age" : 30 }';
    try {
        blahblah();
        if (!json.name) {
            throw new SyntaxError("users name not mentioned.");
        }
    }
    catch (e) {
        if (e.name != 'SysntaxError') {
            throw e;
        }
        console.log(e.name, e.message);
    }
}
try {
    readData();
} catch (e) {
    console.log(e);
}

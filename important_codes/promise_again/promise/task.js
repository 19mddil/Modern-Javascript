function delay(ms) {
    return new Promise(function (resolve, reject) {
        let number = 'seconds';
        if (ms == 1000) {
            number = "second";
        }
        setTimeout(() => resolve(`runs after ${ms} ${number}`), ms);
    });
}
delay(3000).then(result => console.log(result));
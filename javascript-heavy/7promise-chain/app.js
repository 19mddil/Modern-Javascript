new Promise(resolve => setTimeout(resolve(1), 1000))
    .then(result => { return result * 2 }, null)
    .then(result => { return result * 2 }, null)
    .then(result => console.log(result));
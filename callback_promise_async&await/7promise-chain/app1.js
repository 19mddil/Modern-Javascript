new Promise(resolve => setTimeout(resolve(1), 1000))
    .then(result => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(result => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(
        result => console.log(result)
    )
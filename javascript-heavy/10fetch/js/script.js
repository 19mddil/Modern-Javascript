fetch('/json/user.json')
    .then(response => { return response.text() })
    .then(text => console.log(text));
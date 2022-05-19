document.getElementById('output').addEventListener('click', getjokes);

function getjokes() {
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(jsn => console.log(typeof JSON.stringify(jsn.value)))
        .catch(error => console.log(error))
}
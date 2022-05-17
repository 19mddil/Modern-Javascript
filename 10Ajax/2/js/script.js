// http://www.icndb.com/api/
document.getElementById('get_data').addEventListener('click', loadJokes);
//var jokenumber = document.getElementById('jokenumber').value;


function loadJokes(e) {
    let xhr = new XMLHttpRequest();
    let jokenumber = document.getElementById('jokenumber').value;
    xhr.open('GET', `http://api.icndb.com/jokes/random/${jokenumber}`, true);
    let state = xhr.readyState;
    if (state === 0 || state === 1 || state === 2 || state === 3) {
        document.getElementById("output").innerHTML = "<h1>Loading ... </h1>";
    }
    /*
    xhr.onprogress = function() {
        console.log("loading...");
    }
    */
    xhr.onload = function() {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;
            let output = "<ol>";
            jokes.forEach(function(item) {
                //console.log(item.joke);
                output += `<li>${item.joke}</li>`;
            });
            output += "</ol>";
            document.getElementById("output").innerHTML = output;
        }
    }
    xhr.send();
}
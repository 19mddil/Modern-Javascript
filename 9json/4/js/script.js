var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        jsonData(data);
    }
};
xmlhttp.open("GET", "json/data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    var jsonObj = JSON.parse(json_obj);
    //console.log(jsonObj);
    for (x in jsonObj) {
        for (y in jsonObj[x]) {
            //console.log(jsonObj[x][y]["name"] + " Data");
            console.log(jsonObj[x][y].name + "'s Data"); //both works
            for (z in jsonObj[x][y]) {
                console.log(z + " : " + jsonObj[x][y][z]);
            }
            console.log("\n");
        }
    }
}
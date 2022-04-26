var countries = ["Bangladesh","USA","UK"];
console.log(countries);
console.log( countries[0] );
countries[1] = "Poland";
var removedFirstOne = countries.shift();
console.log(removedFirstOne);
console.log(countries);
countries.unshift("New Zealand");
console.log(countries);

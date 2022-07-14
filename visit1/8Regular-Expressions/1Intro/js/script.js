let re;
re = /hello/;
re = /hello/i;

str = "hello world";
str = "sdfdfhellodsf dfs";
str = "o hi hello bye and hello";
str = " do HellO babe and bye HELLo babe";
/*
console.log(re);
console.log(re.source);
*/
//exec() function returns an array or other wise null :)
console.log(re.exec(str));

//test() - true/false
console.log(re.test(str));

//match() is reverse of exec() but still returns same as exec()

console.log(str.match(re));

// search() returns the index of the first match or returns -1
console.log(str.search(re));

//replace() returns new string
str = "again hello world hello mark";
console.log(str.replace(re, "hi"));
console.log(str);
console.log(re.source);
str = str.replace(re, "hi");
console.log(str);
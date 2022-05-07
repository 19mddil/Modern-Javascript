let re;
let str;

//POSTAL CODE CHECK
re = /^[1-9]([0-9]){3}$/;
str = "5256"
console.log(re.test(str));

//PHONE NUMBER CHECK


re = /^h[e?a?]llo$/;
str = "htllo";
console.log("optional " + re.test(str));


re = /^(\+)?(88)?01[4?7?8?9?6?5?][0-9]{8}$/;
str = "01755895762"
console.log(re.test(str));

//EMAIL CHECK

re = /^[a-zA-Z]([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "ohaos.jerms89.irish90.gag@ice.com.uK89";
console.log(re.test(str));
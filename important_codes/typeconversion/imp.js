"" + 1 + 0 // '10'
"" - 1 + 0 //NaN -1
true + false //true 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
" -9 " + 5 // '-95'
" -9 " - 5 // '-14'
null + 1 // 1
undefined + 1 // NaN

//only + makes string concat
//on other case mathematical operators covert everything to number so null is 0 and undefined is NaN

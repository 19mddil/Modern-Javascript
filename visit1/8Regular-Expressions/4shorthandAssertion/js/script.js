// Shorthand Character Classes
let re;
let str;
re = /w/; // Word Character - alpha numeric or _
re = /w+/; // One or more
re = /W/; // Non Word Character
re = /W+/; // one or more
re = /d/; // Digit
re = /d+/;
re = /D/; // Non digit
re = /s/; // Match white space
re = /S/; // Match only non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/; // matches x only if its not followed by yz
str = "dufhhxyzxyzxhhhyzfdf";
console.log(re.exec(str));
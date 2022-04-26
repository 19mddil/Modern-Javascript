let val;
val = this;
//console.log(val);
val = this.document;
//console.log(val);
val = window.document; // val = document would work too
val = window.document.all;
val = document.all[2];
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[1];
val = document.forms[1].method;
val = document.forms[1].action;
val = document.scripts.length;
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

let var2 = [1, 2, 3, 4, 5, 6];
var2.forEach(n => {
    //console.log(n * n)
});

console.log(document.links);
let all_links = Array.from(document.links);
all_links.forEach(n => {
    console.log(n.getAttribute('href'))
});
//console.log(var2);
//console.log(val);
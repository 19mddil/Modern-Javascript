//Document getElementById()


//getting a element
let val = document.getElementById('document-title');
//console.log(val);

//changing style
val.style.background = '#333';
val.style.color = '#fff';
val.style.padding = '10px';
val.style.display = 'block';
val.style.alignContent = 'center';
val.style.textAlign = 'center';

//changing content
val.innerText = 'Some popular programming languages.';
val.innerHTML = '<b><i>Some popular programming languages.</i></b>';


//query Selector
val = document.querySelector('h3');
//val.style.color = 'red';
val = document.querySelector('#document-title');
//val.style.color = 'red';
val = document.querySelector('.title-class');
//val.style.color = 'red';
val = document.querySelector('ul li a');
val.style.color = 'green';

val = document.querySelector('ul li:nth-child(3) a');
val.style.color = 'purple';

val = document.querySelector('ol li:nth-child(odd)');
val.innerHTML = '<b>C++ : A programming language which shows your computer close.</b>';
val = document.querySelector('ol li:nth-child(even)');
val.innerHTML = '<b>Ruby</b>';
console.log(val);
//Adding Elements
let olItem = document.createElement('li');
olItem.className = 'test-class';
olItem.id = 'test-id';
olItem.appendChild(document.createTextNode('Javascript'));
let olTag = document.querySelector('body div ol');
olTag.appendChild(olItem);

let link = document.createElement('a');
link.className = 'link';
link.setAttribute('href', 'https://www.stackoverflow.com');
link.appendChild(document.createTextNode('StackOverFlow'));

let ulItem = document.createElement('li');
ulItem.appendChild(link);

let ulTag = document.querySelector('body div ul');
ulTag.appendChild(ulItem);

//Replacing Elements
let newH3 = document.createElement('h3');
newH3.appendChild(document.createTextNode('Test Page 000'));

let oldH3 = document.querySelector('body div h3');

let parentNode = oldH3.parentElement;
parent = document.querySelector('.container');

parentNode.replaceChild(newH3, oldH3);


//Removing element, adding className, adding attributes


console.log(document.querySelectorAll('body div ol li').length);
let olLiTags = document.querySelectorAll('body div ol li');
olLiTags[4].remove();

ulTag = document.querySelector('body div ul');
let ulLiTags = document.querySelectorAll('body div ul li');
console.log(ulTag.hasChildNodes(ulLiTags[2]));
//ulTag.removeChild(ulLiTags[1]);

console.log(ulLiTags[2]);

ulLiTags[2].className = 'sample-list';
//ulLiTags[2].className = 'samele-list1';
ulLiTags[2].classList.add('sample-list1');
console.log(ulLiTags[2].classList);
//ulLiTags[2].classList.remove('sample-list1');
console.log(ulLiTags[2].classList);
ulLiTags[2].setAttribute('token', '3434');
console.log(ulLiTags[2]);
ulLiTags[2].removeAttribute('token');
console.log(ulLiTags[2]);
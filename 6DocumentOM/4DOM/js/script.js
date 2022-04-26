let all_links = Array.from(document.getElementsByClassName("link"));
console.log(all_links);

all_links.forEach(link => {
    link.style.background = 'grey';
})

all_links = Array.from(document.querySelector('ul').getElementsByTagName('a'));
all_links.forEach(link => {
    link.style.color = 'red';
});

all_links = document.querySelectorAll('ul li a'); //preferable,also no need to transform it to Array.
all_links.forEach(link => {
    link.style.background = 'purple';
})
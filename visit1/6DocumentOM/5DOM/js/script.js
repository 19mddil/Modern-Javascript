let list = document.querySelector('ul'); /********/
let ldiv = document.querySelector('div');

let lItems = document.querySelectorAll('ul li a');

let listitems = list.childNodes;
var list_items_array = Array.from(listitems);

let node_type_map = new Map();

node_type_map.set(1, 'Element');
node_type_map.set(2, 'Attribute');
node_type_map.set(3, 'Text Node');
node_type_map.set(8, 'comment');
node_type_map.set(9, 'Document Itself');
node_type_map.set(10, 'Doctype');

list_items_array.forEach(item => {
    console.log(node_type_map.get(item.nodeType));
    console.log(item.childNodes);
    if (item.childNodes.length > 0) {
        console.log(item.childNodes[1]);
    }
})

var val = ldiv.firstElementChild;
do {
    console.log(val.tagName);
    console.log(val.parentElement.parentElement.tagName);
    val = val.nextElementSibling;
} while (val != null);
'use strict'
let john = { name: 'john' };
// let map = new Map();
// map.set(john, "secret docs");
// john = null;
// console.log(map.get(john));
// for (let item of map.keys()) {
//     console.log(item);//object is not garbage collected
// }
// console.log(map.size);
let weakMap = new WeakMap();
weakMap.set(john, "secret docs");
john = null;
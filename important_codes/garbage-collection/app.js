let family = marry({ name: "john", }, { name: "Lara" });
function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;
    // console.log(man.wife);
    // console.log(woman.husband);
    return {
        father: man,
        mother: woman,
    }
}
console.log(family);
console.log("*************************");
delete family.father;
delete family.mother.husband;
console.log(family); // garbage collector destroyed the poor husband
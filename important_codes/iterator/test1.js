let arrLike = {
    0: "Zara",
    3: "Lerson",
    length: 2,
    sayHi() {
        console.log("hi");
    }
}
console.log(Array.from(arrLike).length);
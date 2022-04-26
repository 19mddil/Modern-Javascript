console.log('before');
try {
    test();
} catch (error) {
    console.log(error.message);
    console.log(error.name);
} finally {
    console.log('it ran anyway');
}
console.log('after');
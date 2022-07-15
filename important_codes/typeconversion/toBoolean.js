let a = Boolean(0);
a = Boolean(null);
a = Boolean(undefined);
a = Boolean("   ");//true
a = Boolean("");
a = Boolean(NaN);
a = Boolean(" ");//true
a = Boolean("0");
console.log(a);
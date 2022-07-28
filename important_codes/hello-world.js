setTimeout(() => { console.log("world") });
console.log("hello");
/*
The first line “puts the call into calendar after 0ms”. But the scheduler will only “check the
calendar” after the current code is complete, so "Hello" is first, and "World" – after it.
*/
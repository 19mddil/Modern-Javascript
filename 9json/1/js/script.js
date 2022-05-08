var student = {
    name: "Robin",
    age: 14,
    grade: 4.00,
};

console.log(student);
//console.log(JSON.stringify(student));
var student_json = JSON.stringify(student);
console.log(student_json);
console.log(JSON.parse(student_json));
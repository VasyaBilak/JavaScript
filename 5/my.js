'use strict'
var emps = [];
emps.push({
    teacher: "Math",
    salary:  "5000 гривень"
});
emps.push({
    teacher: "History",
    salary:  "3800 гривень"
});
emps.push({
    teacher: "Geography",
    salary: "4200 гривень"
});

function dir (a){
    var arr = emps;
    return arr[a];
}
console.log(dir(0));
console.log(dir(1));
console.log(dir(2));




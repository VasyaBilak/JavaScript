'use strict'
var result = document.getElementById('result');

var arr = [];
arr.push({
    id: 1,
    name: "Oleh",
    age: 22
});
arr.push({
    id: 2,
    name: "Stas",
    age: 23
});
arr.push({
    id: 3,
    name: "Ihor",
    age: 16
});

//Д/з: в даному випадку кожна наступна людина затирає дані попередньої. Зробити щоб дані йшли рядками один за одним.

for(var i=0; i<arr.length; i++){
    
   var a = arr[0].id + " " + arr[0].name + " " + arr[0].age+";";
   var b = arr[1].id + " " + arr[1].name + " " + arr[1].age+";"; 
   var c = arr[2].id + " " + arr[2].name + " " + arr[2].age+";";
    
    result.innerHTML =(a+" "+b+" "+c);
};

//result.innerHTML = arr;
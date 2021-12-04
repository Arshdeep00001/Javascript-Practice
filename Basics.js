const { Console } = require("console");

var a=4;
var b=7;
var c,d;
console.log(a + " & " + b);
c=a++ //Here c=4 but a=5
d=b++ //Here d=7 but b=8
e=++a //Here e=6 and a=6
f=++b //Here f=9 and b=9
console.log("1) "+c + " and " + d);
console.log("2) "+e + " and " + f);
console.log(a +" & "+ b);
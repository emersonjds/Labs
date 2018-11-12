var myObj = {};
var a = { value: 1 };
var b = { value: 2 };
myObj.set(a, 5)
myObj.set(b, 10)
console.log(myObj.get(a), myObj.get(b));
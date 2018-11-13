const myConst = 7;

const person = { name: 'Emerson' }

// person = 'Emerson' // return Error

person.name = 'Maria' // ok

console.log(myConst);
console.log(person);

for (var i = 0; i < 10; i++) {

}
console.log(i)

for (let l = 2; l <= 10; l++) {

}
console.log(l) // l is not defined , because let just works in yourself scope

var a = 2;

{
  let a = 3;
  console.log(a)
}
console.log(a)

// New mod of declare variables
var [a, b, c] = [1, 2, 3];
// or
var a = 1,
  b = 2,
  c = 3;

// another mode
var myObj = { a: 1, b: 2, c: 3 };
var { a, b } = myObj

// Antes era feito desta forma 
var myObj = { a: 1, b: 2, c: 3 };
var a = myObj.a,
  b = myObj.b

// or with default values
var myObjt = { a: 1, b: 2 };
var { a, b, c = 5 } = myObj

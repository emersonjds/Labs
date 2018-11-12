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

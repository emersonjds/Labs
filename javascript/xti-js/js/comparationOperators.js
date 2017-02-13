/**
 * Comparation Operators
 */

var a = 6;
console.log(a == 6);
console.log(a == 7);

console.log(a == "6");
//retornou true por que nao esta comparando o tipo de dado

console.log(a === 6);
console.log(a === 7);

console.log(a === "6");
//retornou falso por que comparou a identidade do dado, tipo e valor

console.log(a != 5);
console.log(a != 6);
console.log(a != "6");
console.log(a !== "6");

console.log(a > 7);
console.log(a > 5);

console.log("x" > "b");

console.log("a" < "b");

console.log(a >= 6);

console.log(a <= 6);




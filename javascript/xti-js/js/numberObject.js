var n = 120.35;

console.log(n);
console.log(typeof(n));

var m = new Number(120.35);
console.log(m);
console.log(typeof(m));

var o = new Number("150.672398578954");
console.log(o);
console.log(o.toPrecision(2))
console.log(o.toFixed(4));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.arguments);
console.log(Number.null);

var numero = new Number(23e+37);

console.log(numero.constructor);



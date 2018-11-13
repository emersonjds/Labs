// Propriedades
// Temos agora novas constantes:

// Number.EPSILON - o valor mínimo entre dois números (2^-52);
// Number.MAX_SAFE_INTEGER - o maior número que pode ser representado de modo seguro em JavaScript (2^53 - 1);
// Number.MIN_SAFE_INTEGER - o menor número que pode ser representado de modo seguro em JavaScript ((2^53 - 1) ou (-2)^53 + 1).

var a = NaN, b = "NaN", c = 42;

isNaN(a);     // true
isNaN(b);     // true -- comportamento não esperado
isNaN(c);     // false

Number.isNaN(a);     // true
Number.isNaN(b);     // false -- arrumado
Number.isNaN(c);     // false

Number.isFinite()
// Determina quando o valor passado é um número finito:
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false - (true com a função global isFinite(‘0’) )
Number.isFinite(null);     // false - (true com a função global isFinite(null) )

Number.isInteger()
// Indica se o valor passado é um número inteiro
Number.isInteger(5);       //true
Number.isInteger(0.35);  //false
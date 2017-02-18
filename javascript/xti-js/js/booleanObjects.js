var nome = "Emerson";

console.log(typeof(nome));
console.log(nome.length);

var status = true;
console.log(status);
console.log(typeof(status));

var b = new Boolean(true); // caso seja inicializado sem parametro ele inicializa como false
// 0 ou 1 tambem sao validos

//Zero, null, NaN e a string vazia sao inerentemente false; todo resto é inerentemente true
//
console.log(typeof(b));
console.log(b.toString());

console.log(b instanceof Boolean);

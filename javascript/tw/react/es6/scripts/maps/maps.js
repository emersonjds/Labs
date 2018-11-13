// Quando criamos objetos, basicamente estamos criando coisas como “Arrays”, só que não ordenados, indexados por uma String como chave, enquanto Arrays são ordenados por índices numéricos.

// Algo que não podemos fazer com Objetos é usar objetos como chave:
var myObj = {};
var a = { value: 1 };
var b = { value: 2 };

myObj[a] = 5;
myObj[b] = 10;
console.log(myObj[a], myObj[b]); //return 10 10

// Teremos o mesmo valor retornado. Isso porque os objetos “a” e “b” serão transformados em String, o que fará os valores serem guardados na chave “[object Object]”.

// no es6 nos temos os maps
var myObj = new Map();
var a = { value: 1 };
var b = { value: 2 };
myObj.set(a, 5)
myObj.set(b, 10)
console.log(myObj.get(a), myObj.get(b));
// Temos algumas características a se lembrar:

// Não podemos usar “[ ]” para acessar as propriedades. Para isso, use “get()” e “set()”;
// Podemos limpar todo o conteúdo com a função “clear()”;
// Para pegar o número de chaves, use “size” ao invés de “length”.

let data = new Map();
data.clear() // reseta os dados do Map
data.size // retorna o tamanho desse map
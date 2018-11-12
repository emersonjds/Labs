// O ES6 trouxe um novo tipo primitivo de dado, algo que não acontecia há muito tempo.
// Diferente dos outros tipos primitivos, os Symbols não possuem uma forma literal. Para criar precisamos executar uma função:
var mySymbol = Symbol('My new Symbol') // nao devemos usar new por que Symbol nao tem construtor
// O parâmetro que passamos para a função é opcional, e é simplesmente uma descrição do Symbol.
// Os Symbols são únicos e imutáveis, e podemos usá-los como um identificador das propriedades de objetos.
var a = Symbol('a');
myObj[a] = 5;
console.log(myObj[a]);
console.log(myObj(b));
// Usamos o Symbol “a” para criar uma propriedade para o nosso objeto. Veja que ao acessarmos “b”, não há nenhum valor.
// Mas se a cada vez que chamamos o “Symbol()” um novo é criado, como fazer acesso a uma propriedade de um objeto caso estejamos em um código de um outro arquivo?
// Para isso, precisamos dos Symbols registrados globalmente. Para isso, temos as funções “for()” e “keyFor()”.

var a = Symbol.for('a');
b = Symbol.for('a');
console.log(a === b);
// Agora teremos “true”. Usando “for()” teremos o Symbol registrado globalmente. Se ele não existir, será criado (o que ocorreu na primeira linha). Se o Symbol já existe, ele será retornado (o que acontece na segunda linha).
// Isso fez com que “a” e “b” armazenem o mesmo Symbol, fazendo da comparação, verdadeira.
// Caso você não saiba qual a chave do Symbol para poder retorná-lo com “for()”, use a função “keyFor()”, a qual recebe um Symbol e retorna a chave dele.

Symbol.keyFor('a');
// Atenção: a função “JSON.stringify()” ignora todas as propriedades definidas com Symbols
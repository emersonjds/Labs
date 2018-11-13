// Um Set é uma coleção com valores únicos, ou seja, valores repetidos serão ignorados.
// A API dos Sets é bem parecida com a do Maps, com a diferença de que usamos o método “add()” ao invés de “set()”, e não há o método “get()”.
var mySet = new Set();
var a = { value: 1 };
var b = { value: 2 };

mySet.add(a);
mySet.add(b);
mySet.add(a);

// Ao olhar o nosso Set, verá que não teremos 2 vezes o “a”, pois sua repetição é ignorada.
// Podemos declarar os valores iniciais como uma lista:
var a = { myValue: 1 };
var b = { myValue: 2 };
var mySet2 = new Set([a, b])

// Outras funções de um set
// .has(item) - verifica se determinado item está presente no Set;
// .delete(item) - remove determinado item do Set;
// .clear() - limpa todo o Set;
// .size - retorna a quantidade de itens no Set.
// Sets não precisam de um método “get()”, pois eles são usados apenas para indicar se um elemento único está presente ou não, ou seja, você não pega valores armazenados em um Set.
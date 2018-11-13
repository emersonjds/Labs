// Array.of()
// Cria um Array com o elemento passado.

var myArray = Array.of(3);

// Array.from()
// Cria um novo Array a partir de um objeto como Array ou Iterable
var a = [1, 2, 3];
var b = Array.from(a);

// copyWithin()
// Faz uma cópia de uma parte do Array sem modificar seu tamanho
[1, 2, 3, 4, 5].copyWithin(1, 3, 5) // return 5) [1, 4, 5, 4, 5]

// O primeiro parâmetro indica o índice onde a cópia será inserida.
// Os outros dois parâmetros indicam o índice de início e fim da cópia

// fill()
// Preenche um intervalo de um Array com um valor.
[1, 2, 3, 4, 5, 6].fill(9, 2, 4)
// O primeiro parâmetro é o valor que queremos passar.
// Os outros dois indicam o índice de início e fim do intervalo.

// find()
// Faz uma busca. Para isso, passamos uma função que retorna “true” quando o item for encontrado.
var myArray = [
  {name: 'Amabile'},
  {name: 'Akira'},
  {name: 'Teddy'}
];

myArray.find(item => item.name === 'Teddy')

// findIndex()
// Faz o mesmo que a função anterior, mas retorna o índice ao invés do item.
var myArray = [
  {name: 'Amabile'},
  {name: 'Akira'},
  {name: 'Teddy'}
];

myArray.findIndex(item => item.name === 'Teddy')

// entries(), values, keys()
// Essas funções retornam Iterators.
// “entries()” retorna os itens, “values()” retornam os valores e “keys()” retornam as chaves.
var myArray = [
  {name: 'Amabile'},
  {name: 'Akira'},
  {name: 'Teddy'}
];
[...myArray.values()];
[...myArray.keys()];
[...myArray.entries()];
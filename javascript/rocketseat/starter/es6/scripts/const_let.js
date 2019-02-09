const a = 1; // valor nao pode ser reatribuido
a = 3; // Error a is read-only

Mutação
const usuario = {
  nome: 'Emerson'
}

// Quando uma constante é declarada em formato de objeto ou vetor , é possivel que o valor seja alterado
// esta nova propriedade tem o nome de mutação;
usuario.nome = 'Maria'; // mutation

console.log(usuario); // Maria

function teste(x) {
  let y = 2; // scope function variable
  if(x > 10 ) {
    console.log(x, y);
  }
}

console.log(y) // Error 'y'i is not defined
// o escopo é diferente do escopo global , logo a variavel nao é enxergada fora do escopo em que foi definida
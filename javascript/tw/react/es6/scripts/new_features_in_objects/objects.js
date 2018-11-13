// Object.getOwnPropertySymbols()
// Assim como temos o “getOwnPropertyNames()” para pegar as propriedades de um objeto, essa função retorna os Symbols.
var a = {
  [Symbol('my symbol')]: 5
}

Object.getOwnPropertySymbols(a);

// Object.setPrototypeOf()
// Atribui um protótipo a um objeto. prototipo === classe
var parent = {
  hello() { console.log( "Hello" ); }
};
var child = {};

Object.setPrototypeOf( child, parent );
child.hello();
// Criamos um objeto chamado “child”, e atribuímos o objeto “parent” ao seu Prototype. Assim, teremos acesso aos métodos do “parent” em “child”.

// Object.assign()
// Várias bibliotecas nos fornecem funções para copiarmos ou mesclarmos objetos. A função “assign()” faz isso de maneira simples.
var a = {a: 1},
    b = {b: 2},
    c = {c: 3};
Object.assign(c, a, b)  
// O primeiro parâmetro é o objeto alvo. Os outros são os objetos de onde queremos pegar as propriedades e passar para o primeiro objeto.
// Essa função é muito usada quando estamos trabalhando com Programação Funcional.
// Na Programação Funcional não devemos alterar valores, então podemos usar essa função para criar novos valores:
// Veja que o alvo foi um objeto vazio. Isso porque no exemplo anterior, o “c” foi modificado, e lembre-se que na Programação Funcional não se altera valores.
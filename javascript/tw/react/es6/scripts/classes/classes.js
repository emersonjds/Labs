// O JavaScript é uma linguagem multi paradigma, e um deles é a orientação a objetos, mas ao invés de classes, temos protótipos.
// Podemos simular classes com protótipos, mas para conseguir o comportamento mais igual ao de classes de verdade, precisamos de muito código.
// Com o ES6 nós ganhamos a possibilidade de criar esses protótipos de forma mais fácil, usando a palavra-chave “class”. Basicamente é uma nova sintaxe para se criar o comportamento de classes, mas por baixo dos panos continua sendo um protótipo. Essa sintaxe é bem mais simples e nos dá a sensação de estar trabalhando da mesma forma como as classes são criadas em outras linguagens de programação.

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${name}`)
  }
}

var myAnimal = new Animal('Gumball')
myAnimal.sayName();
// 'A palavra “class” simplesmente cria uma função, assim como fazíamos para criar “classes” antigamente com “function”. Porém, essa é uma “função” especial, que serve para usarmos como classe.
// As funções são escritas de maneira simplificada, como vimos anteriormente, sem a palavra “function”.
// Diferente dos objetos literais, não são permitidas vírgulas para se separar propriedades e métodos no corpo das classes.
// Veja que temos um método chamado “constructor()”. Ele é o método construtor, ou seja, a função que é executada quando criamos uma nova instância da classe.'
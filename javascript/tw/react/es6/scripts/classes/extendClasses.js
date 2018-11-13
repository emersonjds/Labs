// Assim como fazíamos quando trabalhávamos com protótipos, podemos simular o comportamento de herança. Para isso, usamos a palavra “extends”.
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${name}`);
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age;
  }
  cry() {
    super.sayName();
    console.log('Meow');
  }
}
// Veja que é bem mais simples do que antigamente, e bem parecido mesmo como as classes de outras linguagens.
// Usamos “extends” para indicar a classe da qual iremos receber propriedades e métodos.
// Dentro da nova classe, podemos executar a função “super()” no método construtor para chamar o método construtor da classe Pai. Isso com os protótipos não era possível diretamente sem algumas linhas de código para lidar com isso.
// Nos outros métodos, podemos chamar “super” para poder acessar os métodos da classe Pai.
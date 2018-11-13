// Podemos também criar nossos próprios Iterators. Basta criar um objeto e criar uma função que será criada com o Symbol “iterator”.
var RandomNumbers = {

  [Symbol.iterator]() {
    return this;
  },

  next() {
    var number = Math.floor(Math.random() * 5),
      isEven = (number % 2 === 0)
    return { value: number, done: !isEven };
  }

};

var numbers = RandomNumbers[Symbol.iterator]();
[...numbers];

var numbers = RandomNumbers[Symbol.iterator]();
for (var number of numbers) {
  console.log(number);
}
// Criamos um objeto com o método “Symbol.iterator”. Ele irá retornar um valor aleatório e irá parar quando aparecer um número ímpar. Ao executar um Iterator, recebemos um objeto que chamamos de “Iterable”.

// Todo Iterable pode ser trabalhado tanto com “for..of” quanto com o operator “...”. No exemplo acima, acabamos criando um Array com todos os valores do nosso Iterator, e também usamos o “for..of” para andar por cada um dos valores retornados.

// Mas esse objeto acaba deixando o método “next()” acessível. Isso não faz sentido. Ele só deveria estar acessível de dentro de um Iterator, e não diretamente do objeto “RandomNumbers”. Para isso, basta criarmos um outro objeto dentro do Iterator. Vamos ver melhor no próximo exemplo:
var Fibonacci = {
  [Symbol.iterator]() {
      var n1 = 1,
      n2 = 1;

      return {
          [Symbol.iterator]() {
              return this;
          },

          next() {
              var current = n2;
              n2 = n1;
              n1 = n1 + current;
              return { value: current, done: false };
          }
      };
  }
};
// Criamos um objeto que irá retornar a sequência de Fibonacci, aquela em que o próximo número é a soma dos dois anteriores.
// Ali dentro criamos duas variáveis para armazenar nossos valores, “n1” e “n2”. Retornamos um outro objeto lá dentro: um Iterator e uma função “next()”. A função “next()” possui a lógica para atualizar os valores da sequência de Fibonacci.
// Para usar, basta o mesmo código que usamos com a String:
var fib = Fibonacci[Symbol.iterator]();
fib.next();

// Importante
// Cuidado com Iterators como esse. Veja que não colocamos uma condição para ele retornar “done” como “true”, o que o torna infinito. Se você usar um Iterator infinito com o operador “...” ou com um “for..of” sem “break” ou “return”, teremos um looping infinito.

// Dica
// Além de valores, pense também na possibilidade de criar uma lista de tarefas, e a cada “next()”, uma função é executada.
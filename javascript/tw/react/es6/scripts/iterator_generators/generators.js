// Possuímos a mesma coisa em linguagens como Ruby, por exemplo. Para quem nunca viu, esse nome pode assustar no começo, mas os Generators são apenas funções. A diferença é que podemos pausar essa função em uma determinada linha e depois mandá-la continuar de onde parou.
function* myCounter() {
  var i = 0;
  while (true) {
    yield i++
  }
}
var counter = myCounter();

// Podemos ter vários yield em uma função, como:
function* myGenerator() {
  yield 5;
  console.log("we’re back!");
  yield 10;
}

// Ao executar o Generator, a função irá parar no primeiro yield. Ao executar “next()” pela primeira vez, obteremos o valor 5. Ao executar “next()” pela segunda vez, a mensagem "we're back!" será impressa e receberemos o valor “10”.

// Ao invés de um looping para ficar exibindo itens de um Array, podemos mandar o Generator retornar um valor por vez:

function* myGenerator1() {
  yield [1, 2, 3, 4, 5];
}

function* myGenerator2() {
  yield* [1, 2, 3, 4, 5]
}
[...myGenerator2]
for(var g of myGenerator2) {
  console.log(g.next())
}
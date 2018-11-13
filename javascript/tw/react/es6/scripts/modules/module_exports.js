export var myVar = 5;

export function myFunc() {
  console.log("Teste")
}

export class Calc {
  static sum(a, b) {
    return a + b
  }
}

// Colocamos o comando “export” na frente de uma variável, uma função e uma classe. Tudo isso poderá ser usado por outro arquivo. O que não estiver com “export” ficará restrito ao próprio arquivo.

// Podemos também apenas declarar as funções, classes e variáveis normalmente, e apenas no final declararmos a exportação:

export { myVar, myFunc, Calc };

// ou 

export { Calc as MyClass }; // adicionar um alias pra exportação
// Agora com os comandos “class” e “extends”, podemos facilmente criar classes que estendem o comportamento de classes nativas.
class MyArray extends Array {
  doubleValues() {
    return this.map(item => item * 2)
  }
}

var myList = new MyArray(1, 2, 3, 4);
myList.push(5);
console.log(myList.doubleValues()) // return MyArray(5) [2, 4, 6, 8, 10]

// Aqui nós estendemos um Array. Veja que temos o comportamento igual de um Array, como o método “push()” para adicionar um novo item ao final da lista.

// E depois podemos ver que também temos uma nova funcionalidade, que foi a que criamos: um método que retorna todos os valores dobrados sem afetar os valores originais.

// Você pode ter problemas se transpilar esse código no Babel. Isso porque o Babel irá transformar esse código para o formato do ES5, onde não é possível herdar comportamentos de classes Nativas. Para testar esse código, tente executar em um navegador moderno.
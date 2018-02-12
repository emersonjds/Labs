/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayData = [2, true, undefined, null, 'Emerson'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(arrayData)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var numbers = [1, 2, 3, 4, 5];
function getData(array, argValue) {
    return array[argValue];
}

getData(numbers, 2); // return 3

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['Emerson', 28, 1.66, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(getData(valores, 0));
console.log(getData(valores, 1));
console.log(getData(valores, 2));
console.log(getData(valores, 3));
console.log(getData(valores, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
    var books = {
        'JSNinja': {
            quantidadePaginas: 200,
            autor: 'Daciuk',
            editora: 'JS Supreme'
        },
        'Warcraft': {
            quantidadePaginas: 500,
            autor: 'Blizzard',
            editora: 'Blizzard'
        },
        'Dots': {
            quantidadePaginas: 100,
            autor: 'Blizzard',
            editora: 'Blizzard'
        }
    };

    return !bookName ? books : books[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'JSNinja';

"O livro " + bookName + " tem " + book(bookName).quantidadePaginas + "páginas ."
// ou
"O livro " + Object.keys(book())[0] + 'tem ' + Object.keys(book())[0].quantidadePaginas + 'páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro " + bookName + "é " + book(bookName).autor + "."

" O autor do livro " + Object.keys(book())[1] + 'é ' + Object.keys(book())[1].autor + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro " + bookName + " foi publicado pela editora " + book(bookName).editora + "."


"O livro " + Object.keys(book())[3] + " foi publicado pela editora " + Object.key(book())[3].editora + '.'
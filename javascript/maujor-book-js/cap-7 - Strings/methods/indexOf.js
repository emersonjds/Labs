// indexOf(stringProcurada[, inicio])

// O metodo indexOf retorna o indice da primeira ocorrencia da string, definida no parametro stringProcurada. Esse parametro é uma substring suposramente contida na string em que se faz a procura. Se definirmos um caractere e, em consequencia, funciona de forma inversa ao metodo charAt
// O metodo é sensivel ao tamanho da escrita (camelCase) e se a string pocurada nao for encontrada na string pesquisada o indice retornado será -1.

function sindexOf() {
    var texto = 'javascript é a melhor linguagem do mundo e vou dominar ela'

    var s = document.form.s.value;

    var i = Number(document.form.i.value);

    if (isFinite(i) && i >= 0 && i <= texto.length -1 ) {
        document.form.resultado.value = texto.indexOf(s, i)
    } else {
        alert('Entre com um indice valido para o inicio')
    }
}
// substr(inicio, [, comprimento])
// o metodo substr() esta em desuso , mas permite criar uma nova string resultante da extração de parte de uma string. o parametro inicio indica a posição a partir da qual a extração deve começar. O parametro cional comprimento indica a quantidade total de caracteres.

var x = 'Qualquer texto informado';

function ssubstr(inicio, comprimento) {
    var inicio = document.form.inicio.value;
    var comprimento = document.forms.comprimento.value;

    var resultado = s.substr(inicio, comprimento)

    document.form.resultado.value = resultado;

}
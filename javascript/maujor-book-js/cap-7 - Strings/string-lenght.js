//A propriedade lenght destina-se a identificar a quantidade de caracteres na string incluindo espacos em branco e caracteres especiais.


function sLength() {
    var s = document.form.texto.value;
    if (s != '') {
        document.form.comprimento.value = s.length;
    } else {
        document.form.texto.value = 'Entre com uma string'
    }
}

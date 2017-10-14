// O metodo slice permite criar uma nova string resultante da extração de parte de uma string. O parametro inicio indica a posição a partir da qual a extração deve começar. O paramtro opcional fim indica a posição na qual a extração deve parar, e se for omitido, entende-se que a extraçào deve seguir até o final da string.

//O caractere na posição inicio é incluuuido na extração, mas aquele na posição fim é excluido, ou seja, uma extração entre as posições 2 e 5 extrai os caracteres nas posicoes 2, 3, e 4.

// É valido definir um parametro fim com sinal negativo e , nesse caso, a contagem para o final da extração se faz de traz para frente na string, estando o ultimo caractere na posição -1, o penultimo, na -2 e assim por diante


var s = 'javascript é a melhor linguagem';

function sslice(inicio, fim) {
    var inicio = document.form.inicio.value;
    var fim = document.form.fim.value;

    if (fim == '') {
        fim = s.length + 1;
    }

    var resultado = s.slice(inicio, fim);
    document.form.resultado.value = resultado;
}
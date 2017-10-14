// substring(indiceA, [, indiceB])

// O metodo substring() é semelhante ao metodo slice(). uma das diferenças é o fato de que esse metodo, sendo o primeiro parametro maior que o segundo, há uma inversão automatica dos parametros e o retorno da substring, e para aquele, uma situaçãoa destas retorna uma string vazia

// Esse metodo permite criar uma nova string resultante da extração d parte de uma string. O parametro indiceA indica a posição a partir da qual a extração deve começar. O parametro opcional indiceB, indica a posição na qual a extração deve parar, e se for omitido, entende-se que a extração deve seguir até o final da string.

var s = "Javascript é uma linguagem legal";

function ssubstring(indiceA, indiceB) {
    var indiceA = document.form.indicea.value;
    var indiceB = document.form.indiceb.value;
    var resultado = s.substring(indiceA, indiceB)
}


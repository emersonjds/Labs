delete // O operador delete remove uma propriedade de um objeto.
    delete object.property
delete object['property']

    in // verificar existencia de uma propriedade
instanceof // verificar o tipo de objeto
    new // Criar objeto
typeof // retornar o tipo de dado
    void // retornar valor indefinido

    // -------- Operandos e conversao de dados ----------- //
    valores especiais undefined e null se auto convertem para false
0 e NaN idem 
Uma string vazia se auto converte em false por mecanismos internos
Demais valores se convertem para true

objeto = {
    x: 'Ola',
    y: 45,
    z: 90
}

("x" in objeto) ? alert(objeto.x) : alert('Nao encontrado')
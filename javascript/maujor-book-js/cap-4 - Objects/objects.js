var livro = new Object() //object é uma função construtora

//sintaxe literal
livro = {
    titulo: "Ajax com Jquery",
    autor: "Mauricio Samy",
    paginas: 328,
    preco: "R$ " + 69.00,
    frete: "a calcular",
    capitulos: {
        1: "Revisao do Ajax",
        2: "Funcoes para requisiçoes Ajax",
        3: "Eventos e miscelania",
        4: "Requisiçoes com XML",
        5: "Introdução ao formato JSON",
        6: "Requisiçoes JSON"
    }
}

// ou 
livro.titulo = "";
livro.autor = "";
//metodos sao chamados em forma de funções puras, sempre com retornos
livro.frete = (cepOrigem, cepDestino, peso) => {
    var valorFrete = "";
    //script calculo frete
    return valorFrete;
}

//acesso a propriedades 
livro.nomePropriedade
livro["nomePropriedade"]

//utilizando for in 
var p = ""
for (var prop in livro) {
    p += prop + ": " + livro[prop] + "\n";
    if (typeof (livro[prop]) == "object")
        for (var prop1 in livro[prop]) {
            p += prop1 + ": " + livro[prop][prop1] + "\n"
        }
    else {
        p += prop + ": " + livro[prop] + "\n"
    }
}
console.log(p)


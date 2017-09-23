//Utilizado para criar um escopo de bloco paa determinado código
with (objeto) {
    //...codigo
}

var carro = {
    marca: "Renault",
    modelo: "Logan",
    cor: "prata",
    dimensoes: {
        comprimento: "4.20m",
        largura: "1.75m",
        altura: "1.52"
    }
}

console.log(carro.dimensoes.altura)
//ou 
with(carro.dimensoes)
    console.log(comprimento + "\n" + largura + "\n" + altura)
//with traz o escopo do objeto para frente possibilitando o acesso sem as chamadas posteriores

//maneira mais eficaz é referenciando este escopo em uma nova variavel
var ref = ref.dimensoes;
console.log(ref.altura)
console.log(ref.comprimento)
console.log(ref.largura)

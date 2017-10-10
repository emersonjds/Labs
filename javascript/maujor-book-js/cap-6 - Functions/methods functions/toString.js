// O metodo toString retorna uma string mostrando o código da função

function apartamentoDescricao(quarto, local , garagem) {
    this.quarto = quarto;
    this.local = local;
    this.garagem = garagem;
}

console.log(apartamentoDescricao.toString())
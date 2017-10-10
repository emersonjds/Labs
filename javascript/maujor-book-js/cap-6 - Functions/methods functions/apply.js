//O metodo apply funciona da mesma maneira do metodo call, porem a passagem dos parametros é feita em forma de array.

function apartamentoDescricao(local, quartos, vendidos) {
    this.local = local;
    this.quartos = quartos;
    this.vendidos = vendidos;
}

function apartamentoVenda(local ,quarto , garagem , quantidade, vendidos) {
    this.local = local;
    this.quantidade = quantidade;
    this.vendidos = vendidos;
    apartamentoDescricao.apply(this, arguments)
    //apartamentoDescricao.apply(this, [local, quartos, garagem]) // sintaxe opcional
    //apartamentoDescricao.apply(this, new Array(local, quartos, garagem)) // sintaxe opcional
}

zonaSul = apartamentoDescricao('Zona Sul', 4, 'sim', 7,12)
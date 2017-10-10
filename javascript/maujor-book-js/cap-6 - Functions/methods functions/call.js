//O metodo call permite mesclar dois ou mais métodos em um só objeto. Isso é possivel chamando um método dentro do outro e passando o objeto como parametro.
//Esse metodo admite dois parametros obrigatórios. A palavra chave 'this' e 'arguments'
//O resultado é um objeto com varios metodos 

// -------------------------------- // ------------------------- // 
//Exemplo 1

function apartamentoDescricao(local, quartos, garagem) {
    this.local = local;
    this.quartos = quartos;
    this.garagem = garagem;
}

function apartamentoVenda(local, quantidade, vendidos) {
    this.local = local;
    this.quantidade = quantidade;
    this.vendidos = vendidos;
}

zonaSulDescricao = new apartamentoDescricao('Zona Sul', 4, 'sim');
zonaSulVenda = new apartamentoVenda('Zona Sul', 7, 4)

// -------------------------------- // ------------------------- // 
//Exemplo 2

function apartamentoDescricao(local, quartos, garagem) {
    this.local = local;
    this.quartos = quartos;
    this.garagem = garagem;
}

function apartamentoVenda(local, quartos, garagem, quantidade, vendidos) {
    this.local = local;
    this.quantidade = quantidade;
    this.vendidos = vendidos;
    apartamentoDescricao.call(this, local, quartos, garagem);
    //mescla dos atributos do outro metodo ao objeto atual evitando repetição de código
}

zonaSul = new apartamentoVenda('Zona Sul', 4, 'sim', 12, 7)
console.log(zonaSul)

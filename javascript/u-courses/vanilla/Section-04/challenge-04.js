/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (value) {
    return !!value ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(0);
isTruthy(-0);
isTruthy(undefined);
isTruthy(null);
isTruthy('');
isTruthy(false);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('Emerson');
isTruthy(1);
isTruthy({ nome: 'Emerson' });
isTruthy([]);
isTruthy({});
isTruthy(true);
isTruthy(225);
isTruthy(!undefined);
isTruthy(!NaN);
isTruthy([{ nome: 'Emerson' }]);


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'BMW',
    modelo: '325i',
    placa: 'XYZ2018',
    ano: 2002,
    cor: 'black',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = novaCor => carro.cor = novaCor;
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.obterMarca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => `Esse carro é um ${carro.obterMarca} ${carro.obterModelo}
Para retornar os valores de marca e modelo, utilize os métodos criados.`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas". */

carro.adicionarPessoasNoCarro = (numeroPessoas) => {
    var pessoasNoCarro = 0;
    var umaPessoa = `pessoa`;
    pessoasNoCarro += numeroPessoas;

    if (pessoasNoCarro === carro.assentos) {
        return "O carro já está lotado!";
    }
    if (pessoasNoCarro === 4) {
        return `Só cabem mais ${carro.assentos - pessoasNoCarro} ${umaPessoa}.`
    }
    if (numeroPessoas > carro.assentos && numeroPessoas + pessoasNoCarro > carro.assentos) {
        return `Só cabem mais ${carro.assentos - pessoasNoCarro} pessoas`
    }
    return `Já temos ${pessoasNoCarro} pessoas no carro!`;
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() // return vermelho

// Mude a cor do carro para vermelho.
carro.novaCor(`vermelho`);

// E agora, qual a cor do carro?
carro.obterCor();

// Mude a cor do carro para verde musgo.
carro.novaCor(`verde musgo`);

// E agora, qual a cor do carro?
carro.obterCor();

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
carro.adicionarPessoasNoCarro(2)

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoasNoCarro(4)

// Faça o carro encher.
carro.adicionarPessoasNoCarro(5)

// Tire 4 pessoas do carro.
carro.adicionarPessoasNoCarro(-4)

// Adicione 10 pessoas no carro.
carro.adicionarPessoasNoCarro(10)

// Quantas pessoas temos no carro?
carro.adicionarPessoasNoCarro(3);
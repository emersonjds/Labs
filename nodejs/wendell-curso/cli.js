// instalamos um módulo chamado 
// commander para manipular
// ferramentas de linha de comando
// para instalar um pacote no node.js
// utilizamos o Node Package Manager (NPM)
// npm install nomeDoPacote
// npm install commander
// importamos o commander
const Commander = require('commander')
// para importar funções/modulos que estão na minha pasta
// usamos o ./
// oara importar modulos que são instalados
// usamos somente o nome do modulo (que vai procurar na
//node modules)
const Database = require('./database')

Commander
  .version('v1.0')
  .option('c, --cadastrar', 'Cadastrar um Heroi')
  .option('l, --listar', 'Listar herois')

  .option('m, --id', 'Id do Heroi')
  .option('n, --nome', 'Nome do Heroi')
  .option('i, --idade', 'Idade do Heroi')
  .option('p, --poder', 'Poder do Heroi')
  .parse(process.argv)

  ;
(async function main() {
  try {

    const heroi = {
      nome: Commander.nome,
      idade: Commander.idade,
      poder: Commander.poder
    }
    const database = new Database()
    /**
      node cli.js --cadastrar \
      --nome Lanterna Verde \
      --idade 23 \
      --poder Anel 
     */
    if (Commander.cadastrar) {
      heroi.id = Date.now()
      await database.cadastrar(heroi);
      console.log('Heroi cadastrado com sucesso!')
      return;
    }
  }
  catch (erro) {
    console.error('deu ruim!', erro)
  }
})()

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
  .option('-c, --cadastrar', 'Cadastrar um Heroi')
  .option('-l, --listar', 'Listar herois')
  .option('-r, --remover', 'Remover herois pelo Id')
  .option('-r, --atualizar', 'Atualizar nome pelo Id')
  .option('-m, --id [value]', 'Id do Heroi')
  .option('-n, --nome [value]', 'Nome do Heroi')
  .option('-i, --idade [value]', 'Idade do Heroi')
  .option('-p, --poder [value]', 'Poder do Heroi')
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
      --nome "Lanterna Verde" \
      --idade 23 \
      --poder Anel 
     */
    if (Commander.cadastrar) {
      heroi.id = Date.now()
      await database.cadastrar(heroi);
      console.log('Heroi cadastrado com sucesso!')
      return;
    }
    /**
     node cli.js --listar
     */
    if (Commander.listar) {
      const resultado = await database.listar()
      console.log(resultado)
      return;
    }
    /**
     node cli.js --remove --id 1538241031963
     */
    if (Commander.remover) {
      //necessario converter para inteiro para remoção 
      const id = parseInt(Commander.id);
      await database.remover(id)
      console.log('Item removido com sucesso')
      return;
    }
    /**
     node cli.js --atualizar --id --nome novoNome
     */

    if (Commander.atualizar) {
      const id = parseInt(Commander.id);
      await database.atualizar(id, heroi.name)
      console.log('Item atualizado com sucesso')
      return;
    }
  }
  catch (erro) {
    console.error('deu ruim!', erro)
  }
})()

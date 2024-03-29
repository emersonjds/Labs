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
const mongoDBDatabase = require('./mongodb/databaseMongoDB');

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

    //conectando no banco
    mongoDBDatabase.connect()

    /**
      node cli.js --cadastrar \
      --nome "Lanterna Verde" \
      --idade 23 \
      --poder Anel 
     */
    if (Commander.cadastrar) {
      // heroi.id = Date.now()
      // await database.cadastrar(heroi);
      // inserindo no banco de dados
      await mongoDBDatabase.cadastrar(heroi)
      console.log('Heroi cadastrado com sucesso!')
      process.exit(0) // informa ao SI que o metodo terminou
      return;
    }
    /**
     node cli.js --listar
     */
    if (Commander.listar) {
      // const resultado = await database.listar()
      const resultado = await mongoDBDatabase.listar({}, 3, 2)
      console.log(resultado)
      process.exit(0)
      return;
    }
    /**
     node cli.js --remove --id 5bb0d53896a7f79343ad974c
     */
    if (Commander.remover) {
      //necessario converter para inteiro para remoção 
      // const id = parseInt(Commander.id);
      // await database.remover(id)
      // console.log('Item removido com sucesso')
      // return;
      const resultado = await mongoDBDatabase.remover({ _id: Commander.id })
      if (resultado)
        console.log('Item removido com sucesso')
      else
        console.log('Nao foi possivel remover o item')
      process.exit(0)
      return;
    }
    /**
     node cli.js --atualizar --id --nome novoNome
     */

    if (Commander.atualizar) {
      // const id = parseInt(Commander.id);
      // await database.atualizar(id, heroi.name)
      // console.log('Item atualizado com sucesso')
      // return;

      //limpamos a chave do objeto com uma pequena gambiarra
      const heroiString = JSON.stringify(heroi)
      const heroiJson = JSON.parse(heroiString)

      const resultado = await mongoDBDatabase
        .atualizar(Commander.id, heroiJson)

      if (resultado)
        console.log('item atualizado com sucesso')
      else
        console.log('Erro ao atualizar item')

      process.exit(0)
      return;
    }
  }
  catch (erro) {
    console.error('deu ruim!', erro)
  }
})()

// O mongodb é um banco que funciona inteiramente com Javascript
// para criar tabelas, registros, 
// tudo é manipulado a partir de comandos Javascript
// cada registro é um objeto javascript

// O mongodb cria automaticamente o database se ele nao exitir
// caso tentar criar um registro em uma tabela que nao existe ele
// ira criar a tabela e inserir as informações

// para listar os bancos de dados disponiveis
// show databases

// para entrar no contexto de um database
// use nomeDatabase

// // para criar um registro e cria uma collection 
// // db.nomeCollection.insert

// // O mongodb é constituido por 2 processos
// // -> mongod -> o servidor rodando em background
// // -> mongo -> de fato para entrar e manipular o servidor

// //use nomeBancoDeDados -> cria banco e seta banco pra uso

// //para listar nossos registros
// // db.nomeCollection.find()***

// // para listar as collections
// // show collections***
// //Executar Where
// // traz tudo do Aladin
// db.nomeCollection.find({ name: 'ALADIN' })
// //traz tudo do nome pesquisado e o 0 serve para esconder o campo
// db.nomeCollection.find({}, { name: 1, _id: 0 })
// // Ordenar pelo name
// db.nomeCollection.find({}, { _id: 0, name: 1 }).sort({ name: 1 })

// //adicionar 1000 itens
// for (let i = 0; i < 1000; i++) {
//   db.personagem.insert({ name: 'P' + i + 'AEW' })
// }

// // função OR
// db.personagem.find({
//   $or: [
//     { name: 'P109AEW' },
//     { name: 'P109AEW' }
//   ]
// })

// // funcao AND
// db.personagem.find({
//   $and: [
//     { name: 'P109AEW' },
//     { _id: '5bb0d53896a7f79343ad97b9' }
//   ]
// })

// //remover um item
// db.personagem.remove({}) // remove tudo
// db.personagem.remove({ name: 'P10AEW' })

// //contagem de itens
// db.personagem.count({})

// // Isso altera o nome da propriedade
// const name = 'P1AEW'
// db.personagem.update({ name: name }, { poder: 'Anel' })
// db.personagem.find({ name: name })


// // forma correta de setar um campo
// const _id = '5bb0d53896a7f79343ad974d';
// db.personagem.update(
//   { name: name },
//   { $set: { name: 'P0AEW' } },
//   { multi: 1 }
// )

// db.personagem.find({ _id: _id })
// db.personagem.find().pretty() // formata o mongo de forma mais visual

// o mongodb permite fazer CAGADA
// precisamos falar explicitamente o que ele deve fazer
// para que nao tenhamos problemas na aplicação
// Instalamos uma biblioteca para validar e conectar no banco
// npm i mongoose

// importar lib de conexao
const Mongoose = require('mongoose');
// schema para modelagem de entidades do banco
const Schema = require('mongoose').Schema
// conectar com banco de dados


// async function main() {
//   const inserir = await model.create({
//     nome: 'Superman',
//     poder: 'Super Força',
//     idade: 1000
//   })
//   console.log('resultado', inserir)
//   console.log(await model.find())
// }

// main()

class DataBaseMongoDB {
  connect() {
    Mongoose.connect('mongodb://localhost:27017/herois');
    const connection = Mongoose.connection;
    connection.once('open', () => console.log('db rodando!!!'))
    // modelagem
    const heroiSchema = new Schema({
      nome: {
        type: String,
        required: true
      },
      poder: {
        type: String,
        required: true
      },
      idade: {
        type: Number,
        required: true
      },
      inseridoEm: {
        type: Date,
        default: new Date()
      }
    })
    // por padrao o CERTO a coleção ser no plural, mas caso queira definir um nome para coleÇão
    // basta inserir no terceir parametro 
    // ordem
    // mongoose.model(model, schema, nome Collection) 
    const model = Mongoose.model('personagem', heroiSchema, 'personagem');
    this.personagem = model;
  }

  async cadastrar(item) {
    const resultado = await this.personagem.create(item)
    return !!resultado.id;
  }

  // no javascript é possivel passar parametros default
  // caso nada seja passado esse default sera utilizado

  async listar(filtro = {}, limite = 100, ignore = 0) {
    const resultado = await this.personagem
      .find(filtro)
      //limitar quantidade de registros
      .limit(limite)
      //ignoramos a quantidade de registros 
      // para buscar aquela quantidade
      .skip(ignore)

    return resultado;
  }

  remover(filtro) {
    const removerResultado = this.personagem.deleteOne(filtro)
    return !!removerResultado.n
  }

  async atualizar(id, item) {
    const resultado = await this.personagem
      .updateOne({ _id: id }, {
        $set: item
      })
    return !!resultado.nModified
  }
}

// async function main() {
//   const database = new DataBaseMongoDB();

//   database.connect();

//   const inserirItem = await database.cadastrar({
//     nome: 'Maquina de Combate',
//     poder: 'Armas',
//     idade: 31
//   })
//   const resultadoRemover = await database.remover({
//     nome: 'Maquina de Combate'
//   })

//   const resultadoAtualizar = await database.atualizar('5bb0d53896a7f79343ad9757', {
//     name: 'Batman',
//     poder: 'Dinheiro'
//   })

//   console.log(inserirItem)
//   console.log(await database.listar({}, 3, 2))
//   console.log('resultadoRemover', resultadoRemover)
//   console.log('resultadoAtualizar', resultadoAtualizar)
//   db.personagem.find()
// }

// main();

module.exports = new DataBaseMongoDB();
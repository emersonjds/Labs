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

// para criar um registro e cria uma collection 
// db.nomeCollection.insert

// O mongodb é constituido por 2 processos
// -> mongod -> o servidor rodando em background
// -> mongo -> de fato para entrar e manipular o servidor

//use nomeBancoDeDados -> cria banco e seta banco pra uso

//para listar nossos registros
// db.nomeCollection.find()***

// para listar as collections
// show collections***
//Executar Where
// traz tudo do Aladin
db.nomeCollection.find({ name: 'ALADIN' })
//traz tudo do nome pesquisado e o 0 serve para esconder o campo
db.nomeCollection.find({}, { name: 1, _id: 0 })
// Ordenar pelo name
db.nomeCollection.find({}, { _id: 0, name: 1 }).sort({ name: 1 })

//adicionar 1000 itens
for (let i = 0; i < 1000; i++) {
  db.personagem.insert({ name: 'P' + i + 'AEW' })
}

// função OR
db.personagem.find({
  $or: [
    { name: 'P109AEW' },
    { name: 'P109AEW' }
  ]
})

// funcao AND
db.personagem.find({
  $and: [
    { name: 'P109AEW' },
    { _id: '5bb0d53896a7f79343ad97b9' }
  ]
})

//remover um item
db.personagem.remove({}) // remove tudo
db.personagem.remove({ name: 'P10AEW' })

//contagem de itens
db.personagem.count({})

// Isso altera o nome da propriedade
const name = 'P1AEW'
db.personagem.update({ name: name }, { poder: 'Anel' })
db.personagem.find({ name: name })


// forma correta de setar um campo
const _id = '5bb0d53896a7f79343ad974d';
db.personagem.update(
  { name: name },
  { $set: { name: 'P0AEW' } },
  { multi: 1 }
)

db.personagem.find({ _id: _id })
db.personagem.find().pretty() // formata o mongo de forma mais visual

// o mongodb permite fazer CAGADA
// precisamos falar explicitamente o que ele deve fazer
// para que nao tenhamos problemas na aplicação
// Instalamos uma biblioteca para validar e conectar no banco
// npm i mongoose









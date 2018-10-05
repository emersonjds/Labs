// http://dontpad.com/studygroup

// https://web.facebook.com/groups/erickwendel/

// https://nodejs.org

// WIFI
// CD-VISITANTES
// @C3dr0#$2020#

// npm -> repositorio de pacotes do nodejs
// node -> plataforma de desenvimento
// npm init -> para inicializar um projeto
// npm init -y -> para inicializar 
// sem perguntar nada

// percebemos que trabalhar com 
// callbacks pode ser trabalhoso
// e dificil gerenciar quando temos um 
// fluxo de dados muito grande
// precisamos  validar cada erro individualmente
// e precisamos garantir o valor de cada função
// e garantir também a convenção dos callbacks

// Para gerenciar melhor as funções usamos o objeto
// PROMISE
// Quando inicializamos uma Promise 
// Temos o estado -> Pending 
// Quando uma promise acontece um problema
// Temos o estado -> rejected
// Quando uma promise acontece o esperado
// Temos o estado -> success / Fullfilled
// para criar um objeto promise 
// recebe uma função com dois parametros
// 1o Resolve 
// 2o Reject

// Quando precisamos consumir uma biblioteca de terceiros
// Em muitos ainda usam CALLBACKS para trabalhar
// Então podemos converter funções que seguem a CONVENCAO
// Importamos um módulo nativo do nodejs (somente no backend)
const util = require('util')
// convertemos nossas funções para Promise
const obterTelefoneAsync = util.promisify(obterTelefone)

// Quando precisar lançar um erro, chamamos a reject
// Quando precisar informar que terminou chamamos o resolve
const minhaPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    return resolve({ mensagem: 'Callback é kct' })
  }, 2000);
})

// quando precisar recuperar o estado Fullfile (ou completo)
// temos a função .then
// quando precisar recuperar o erro
// temos a função .catch
// minhaPromise
//     .then(function (resultado) {

//         return resultado.mensagem
//     })
//     .then(function (resultado) {
//         console.log('Meu Resultado', resultado)
//     })
//     .catch(function (erro) {
//         console.log('DEU RUIM', erro)
//     })

// cenario
// Obter usuario
// Obter Endereco
// Obter Telefone
// Printar na tela

// adicionamos o parametro callback
// que poderia se chamar qualquer nome
// por padrão o callback é sempre o ultimo
// argumento da funcao
function obterUsuario() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Aladin',
        idade: 10,
        dataNascimento: new Date()
      })
    }, 1000);
  })
}

function obterEndereco(idUsuario) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        rua: 'rua dos bobos',
        numero: 0
      })
    }, 1000);
  })
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      numero: '11 8908080',
      ddd: 11
    })
  }, 2000);
}

// passamos uma função que será executada
// quando o método terminar
// por convenção 
// quando trabalhamos com callbacks
// o primeiro argumento é o erro
// e o segundo o sucesso
// obterUsuario(function callback(erro, usuario) {
//     console.log('Usuario', usuario)
//     // no java 
//     // 0, null, undefined e vazio === FALSE
//     if (erro) {
//         throw new Error('Deu Ruim em Usuario')
//     }

//     obterEndereco(usuario.id, function callback1(erro1, endereco) {
//         console.log('Endereco', endereco)
//         if (erro1) {
//             throw new Error('Deum Ruim em Endereco')
//         }
//         obterTelefone(usuario.id, function callback2(erro2, telefone) {
//             if (erro2) {
//                 throw new Error('Deu Ruim em Telefone')
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Telefone: ${telefone.numero},
//                 Endereco: ${endereco.rua}
//             `)
//         })
//     })
// })

// console.log('executa depois do usuario')
// const endereco = obterEndereco(usuario.id)
// const telefone = obterTelefone(usuario.id)

// console.log(`
//     Nome: ${usuario.nome},
//     Endereco: ${endereco.rua},
//     Telefone: ${telefone.numero}
//`)

obterUsuario()
  .then(function (resultado) {
    return obterEndereco(resultado.id)
      .then(function (endereco) {
        return {
          rua: endereco.rua,
          numero: endereco.numero,
          nome: resultado.nome,
          id: resultado.id
        }
      })
  })
  .then(function (resultado) {
    return obterTelefoneAsync(resultado.id)
      .then(function (telefone) {
        return {
          rua: resultado.rua,
          nome: resultado.nome,
          id: resultado.id,
          telefone: telefone.numero,
        }
      })
  })
  .then(function (resultado) {
    console.log('resultado', resultado)
  })
  .catch(function (error) {
    console.log('ERRO', error)
  })

//Recentemente na versão ES8 do JS
//O Time do C# propos uma feature
//para melhorar o fluxo de operações
//Agora , o mesmo fluxo que é visualizado
// é executado
//1 passo -> adicionar a palavra async na assinatura da função
// isso faz a função informar que retornara uma PROMISE

// 2 passo é adicionar a palavra await na função que queremos manipular o resultado

async function main() {

  // para manipulação de erros em promise
  // usando async/await
  // usamos o block try/catch
  // quando algo inesperado acontecer 
  // o catch é ocasionado

  try {
    const usuario = await obterUsuario();
    const endereco = await obterEndereco(usuario.id);
    const telefone = await obterTelefoneAsync(usuario.id);
    console.log(`
        Nome: ${usuario.nome},
        Endereço: ${usuario.endereco},
        Numero: ${usuario.telefone.numero},
      `)
  } catch (error) {
    console.log('Error', error)
  }
}

main()
  .then(function (resultado) {
    console.log('terminou')
  }).catch(error => console.log('deu ruim', error))

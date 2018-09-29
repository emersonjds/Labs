http://dontpad.com/studygroup

https://web.facebook.com/groups/erickwendel/

https://nodejs.org

WIFI
CD-VISITANTES
@C3dr0#$2020#

// npm -> repositorio de pacotes do nodejs
// node -> plataforma de desenvimento
// npm init -> para inicializar um projeto
// npm init -y -> para inicializar 
// sem perguntar nada

// cenario
// Obter usuario
// Obter Endereco
// Obter Telefone
// Printar na tela

// adicionamos o parametro callback
// que poderia se chamar qualquer nome
// por padrão o callback é sempre o ultimo
// argumento da funcao
function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            idade: 10,
            dataNascimento: new Date()
        })
    }, 1000);
}
function obterEndereco(idUsuario, callback) {
    // o setTimeout 
    // espera uma quantidade de millisegundos
    // para executar um determinado trecho

    setTimeout(() => {
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    }, 1000);
}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            numero: '11 8908080',
            ddd: 11
        }
    }, 2000);
}

// passamos uma função que será executada
// quando o método terminar
// por convenção 
// quando trabalhamos com callbacks
// o primeiro argumento é o erro
// e o segundo o sucesso
obterUsuario(function callback(erro, usuario) {
    console.log('Usuario', usuario)
    // no java 
    // 0, null, undefined e vazio === FALSE
    if (erro) {
        throw new Error('Deu Ruim em Usuario')
    }

    obterEndereco(usuario.id, function callback1(erro1, endereco) {
        console.log('Endereco', endereco)
        if (erro1) {
            throw new Error('Deum Ruim em Endereco')
        }
        obterTelefone(usuario.id, function callback2(erro2,telefone){
            if(erro2) {
                throw new Error('Deu Ruim em Telefone')
            }

            console.log(`
                Nome: ${usuario.nome},
                Telefone: ${telefone.numero},
                Endereco: ${endereco.rua}
            `)
        })
    })
})

console.log('executa depois do usuario')
// const endereco = obterEndereco(usuario.id)
// const telefone = obterTelefone(usuario.id)

// console.log(`
//     Nome: ${usuario.nome},
//     Endereco: ${endereco.rua},
//     Telefone: ${telefone.numero}
//`)
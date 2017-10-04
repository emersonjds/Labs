//Função estática

function ola() {
    alert('Bem vindo')
}

function bemVindo() {
    var nomeUsuario = prompt('Digite seu nome')
    nomeUsuario = (nomeUsuario) ? nomeUsuario : 'visitante'
    alert('Bem vindo ' + nomeUsuario)
}

bemVindo()
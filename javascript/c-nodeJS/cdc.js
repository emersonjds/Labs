var express = require('express')
var server = express()

server.get("/", (req, res) => {
    res.send('Testando server')
})

server.get("/lista", (req, res) => {
    res.send('Lista de alunos')
})

server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







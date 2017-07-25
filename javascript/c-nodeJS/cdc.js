var express = require('express')
var server = express()
server.set("view engine", "ejs");

var fs = require('fs')

server.get("/", (req, res) => {
    res.send('Testando server')
})

server.get("/produtos/lista", (req, res) => {

    var livros = []
    res.render("produtos/lista", { livros: [
        {titulo: 'Javascript', preco: 50, descricao: 'Javascript'}
    ] })
})

server.use(express.static("/public")) // faz a chamada para trazer os arquivos estaticos


server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







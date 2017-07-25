var express = require('express')
var server = express()
server.set("view engine", "ejs");

var fs = require('fs')

server.get("/", (req, res) => {
    res.send('Testando server')
})

server.get("/produtos/lista", (req, res) => {
    // fs.read("lista.html", (data) => {
    //     res.send(data)
    // })
    res.render("produtos/lista")
})

server.get("/produtos/cadastro", (req, res) => {
    res.send('Lista de alunos')
})


server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







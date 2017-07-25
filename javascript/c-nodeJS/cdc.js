var express = require('express')
var server = express()
server.set("view engine", "ejs");


server.get("/", (req, res) => {
    res.send('Testando server')
})

//assyncronous call
server.get("/produtos/lista", (req, res) => {
    var livros = []
   
    res.render("produtos/lista", {
        livros: [
            { titulo: "Livro 1", preco: 5, descricao: 'Livro 1'}
        ]
    })
})

server.use(express.static("./public")) // faz a chamada para trazer os arquivos estaticos


server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







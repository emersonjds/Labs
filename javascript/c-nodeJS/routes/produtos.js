var server = require("../config-server") // mesmo chamando o arquivo de conf novamente ele so gera uma instancia da chamada

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


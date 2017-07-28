var server = require("../config-server") // mesmo chamando o arquivo de conf novamente ele so gera uma instancia da chamada
var getConnection = require("../model/bd/connectionFactory");
var criaProdutoDao = require("../model/bd/produtoDAO");


server.get("/", (req, res) => {
    res.send('Testando server')
})

//assyncronous call
server.get("/produtos/lista", (req, res) => {

    var conexao = getConnection()
    var produtoDAO = new criaProdutoDao(conexao)


    produtoDAO.pegaLivros((error, lista) => {
        if (!error) {
            res.render("produtos/lista", {
                livros: lista,
                msgErro: ""
            })
        } else {
            res.render('produtos/lista', {
                livros: [],
                msgErro: 'Deu ruim'
            })
        }
    })
})

server.get("/produtos/form", (req, res) => {
    res.render("produtos/form", {
        validationErrors: []
    })
})


server.post("/produtos", (req, res) => {

    var conexao = getConnection()
    var produtoDAO = new criaProdutoDao(conexao)
    console.log(req.body)

    var livro = req.body //dados enviados da requisicao

    produtoDAO.salvaLivro(livro, (err, result) => {
        if (!err)
            res.send("Foi")
    })

})
var server = require("../config-server") // mesmo chamando o arquivo de conf novamente ele so gera uma instancia da chamada
var getConnection = require("../model/bd/connectionFactory");
var criaProdutoDAO = require("../model/bd/produtoDAO");


server.get("/", (req, res) => {
    res.send('Testando server')
})

//assyncronous call
server.get("/produtos/lista", (req, res) => {

    var conexao = getConnection()
    var produtoDAO = new criaProdutoDAO(conexao)


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

    // salvaLivro(conexao, livro, (err , result) => {
    //     if(!erro) {
    //         res.send("Deu bom")
    //     }
    // })



})

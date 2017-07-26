var server = require("../config-server") // mesmo chamando o arquivo de conf novamente ele so gera uma instancia da chamada
var getConnection = require("../model/bd/connectionFactory"); 

server.get("/", (req, res) => {
    res.send('Testando server')
})

//assyncronous call
server.get("/produtos/lista", (req, res) => {

    var conexao = getConnection()

    //assyncronous function
    conexao.query("SELECT * FROM livros", (error, data) => {
        if (!error) {
            res.render("produtos/lista", {
                livros: data,
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


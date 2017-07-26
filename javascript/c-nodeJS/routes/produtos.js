var server = require("../config-server") // mesmo chamando o arquivo de conf novamente ele so gera uma instancia da chamada

server.get("/", (req, res) => {
    res.send('Testando server')
})

//assyncronous call
server.get("/produtos/lista", (req, res) => {
    var mysql = require("mysql") //driver mySql
    var conexao = mysql.createConnection({
        hostname: "http://192.168.57.183",
        user: "root",
        password: "",
        database: "casadocodigo",
        port: 32774
    })

    //assyncronous function
    conexao.query("SELECT * FROM livros", (error, data) => {
        if (!error) {
            res.render("produtos/lista", {
                livros: data
            })
        } else {
            resp.send("Deu ruim")
        }
    })
})


var express = require('express')
var server = express()
var querystring = require("querystring")
var bodyParser = require("body-parser")
var expressValidator = require("express-validator")

server.set("view engine", "ejs");
server.use(express.static("./public")) // faz a chamada para trazer os arquivos estaticos

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())

server.use(expressValidator())

require("./routes/produtos")(server)

server.use((req, res) => {
  res.send("Nao existe")
})

server.use((erro, req, res, next) => {

  res.format({
    html: () => {
      res
        .status(500)
        .render("erros/500", {
          erro: erro
        })
    },
    json: () => {
      res.status(500).send(erro)
    }
  })
})


//RETORNO DO BODY PARSER//

// server.use((req, res, next) => {
//     req.body = ""

//     req.on("data", (chunk) => {
//         req.body = req.body + chunk
//     })

//     req.on("end", () => {
//         req.body = querystring.parse(req.body) -> RETORNO DO FORM EM URL ENCODED
//         next()
//     })
// })



module.exports = server
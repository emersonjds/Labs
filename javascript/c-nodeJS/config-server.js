var express = require('express')
var server = express()
var querystring = require("querystring")
var bodyParser = require("body-parser")

server.set("view engine", "ejs");
server.use(express.static("./public")) // faz a chamada para trazer os arquivos estaticos

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())


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
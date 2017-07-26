var express = require('express')
var server = express()
server.set("view engine", "ejs");
server.use(express.static("./public")) // faz a chamada para trazer os arquivos estaticos

module.exports = server
var express = require('express')
var server = express()
var querystring = require("querystring")

server.set("view engine", "ejs");
server.use(express.static("./public")) // faz a chamada para trazer os arquivos estaticos

server.use((req, res, next) => {
    req.body = ""

    req.on("data", (chunk) => {
        req.body = req.body + chunk
    })

    req.on("end", () => {
        req.body = querystring.parse(req.body)
        next()
    })
})


module.exports = server
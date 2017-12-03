var express = require("express");
var bodyParser = require("body-parser"); //json parse

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
})
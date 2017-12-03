// var express = require("express");
// var bodyParser = require("body-parser"); //json parse

// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(8081, () => {
//     console.log('Servidor rodando na porta 8081');
// })

var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');

    if(req.method.toLocaleLowerCase() === 'post') {
        processForm(req, res);
        return;
    }
    res.end();
});

function processForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });

        res.end(util.inspect({
            fields: fields
        }));

        console.log('posted fields: \n');
        console.log(util.inspect({
            fields: fields
        }));
    });
}

var port = 3100;
server.listen(port);
console.log('Server listening on port' + port);


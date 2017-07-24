

var http = require('http')

var server = http.createServer((req, res) => {
    res.end('Testando server')
})

server.listen(3000, 'localhost');

console.log('rodando');




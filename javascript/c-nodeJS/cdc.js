

var http = require('http')

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    })
    res.end('Testando server')
})

server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







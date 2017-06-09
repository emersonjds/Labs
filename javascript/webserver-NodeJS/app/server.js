let http = require('http');
let port = 3000;
let ip = 'localhost';

const server = http.createServer(req, res => {
        console.log('Recebendo uma request');
        res.end('<h1>Aqui fica o que vamos enviar para o navegador</h1>');
})

server.listen(port, ip, () => {
        console.log('Servidor rodando na porta' + port);
        console.log('Para derrubar o servidor : ctrl + c');
})
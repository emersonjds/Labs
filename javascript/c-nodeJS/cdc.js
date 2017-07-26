var server = require('./config-server') // configuracao de servidor
require("./routes/produtos") // chamada do arquivo de rotas

server.listen(3000, 'localhost', () => {
    console.log('Escutando na porta 3000')
})







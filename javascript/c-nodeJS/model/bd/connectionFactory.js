var mysql = require("mysql") //driver mySql

function getConnetion() {
    
    config = require("../../config/config")

    //variavel de ambiente do node
    //****process.env
    
    //cria um pool de conexao ao inves de criar uma conexao a cada requisicao
    return mysql.createPool({
        connectionLimit: 10,
        hostname: config.MYSQL_DB_ADDRESS,
        user: config.MYSQL_DB_USER,
        password: config.MYSQL_DB_PASSWORD,
        database: config.MYSQL_DB_NAME,
        port: config.MYSQL_DB_PORT
    })
}


module.exports = getConnetion
var mysql = require("mysql") //driver mySql

function getConnetion() {
    return mysql.createConnection({
        hostname: "localhost",
        user: "root",
        password: "",
        database: "casadocodigo",
        port: 3306
    })
}


module.exports = getConnetion
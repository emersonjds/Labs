function pegaLivros(conexao, callback) {

    conexao.query("SELECT * FROM livros", callback)
}

module.exports = pegaLivros
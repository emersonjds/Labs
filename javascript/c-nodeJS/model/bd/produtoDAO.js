
module.exports = function ProdutoDao(conexao) {
    return {
        pegaLivros: function pegaLivros(callback) {
            conexao.query("SELECT * FROM livros", callback)
        },

        salvaLivro: function () {

        }
    }
}

function criaProdutoDAO(conexao) {
    this.conexao = conexao;
}

criaProdutoDAO.prototype.pegaLivros = function pegaLivros(callback) {
    this.conexao.query("SELECT * FROM livros", callback)
}

criaProdutoDAO.prototype.salvaLivro = function salvaLivro(livro, callback) {
    //TODO : IMPLEMENTAR
}


module.exports = criaProdutoDAO


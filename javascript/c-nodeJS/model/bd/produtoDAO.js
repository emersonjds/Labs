
module.exports = function ProdutoDao(conexao) {
    return {
        pegaLivros: function pegaLivros(callback) {
            conexao.query("SELECT * FROM livros", callback)
        },

        salvaLivro: function() {

        }
    }
}


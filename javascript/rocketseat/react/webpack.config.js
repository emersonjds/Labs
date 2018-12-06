const path = require('path');

// path = pacote nativo do Node
// dirname = diretorio atual, depois os parametros subsequentes, cada virgula passada é como se representasse uma barra na busca do arquivo por diretorio

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // pasta que o webpack fica monitorando para gerar um novo bundle com o wepback server rodando
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
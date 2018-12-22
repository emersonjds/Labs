const path = require("path");

module.exports = {
  //arquivo principal da aplicação
  entry: path.resolve(__dirname, "src", "index.js"),
  //dir name: pega a raiz do repositorio atual
  // cada , é como se fosse uma barra

  //onde sera jogado o codigo transpilado
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  devServer: {
    //pasta que o wbp fica monitorando para atualizar o bundle final
    contentBase: path.resolve(__dirname, "public")
  },

  module: {
    //regras
    rules: [
      {
        test: /\.js$/, // todos os arquivos terminando com .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = {
  //arquivo princiapl
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    // caminho do servidor
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
};

// Notes: Em modo de desenvolvimento nao é criado o arquivo bundle que fica embutido no arquivo principal em html para carga dos scripts, quando o build para produção é gerado ai sim é gerado o bundle.js como configurado no webpack file
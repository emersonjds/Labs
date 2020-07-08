module.exports = {
  presets: [
    //conjunto de configuracoes criadas por terceiros
    "@babel/preset-env", // converte codigo antigo de acordo com o ambiente para aceitar configuracoes mais atuais
    "@babel/preset-react",
  ],
};

// com a adicao do babel o navegador entender e faz a transpilacao
// com o babel/cli é possivel passar uma flag para o arquivo de saida convertido
// yarn babel (caminho) --out-file (arquivo de saida) (caminho) public/bundle.js

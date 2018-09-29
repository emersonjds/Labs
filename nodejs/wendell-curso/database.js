//modulo para manipulação de arquivos
const fs = require('fs');
const util = require('util');
//convertemos o metodo de escrita de arquivos para promite
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const path = require('path');

class Database {
  //dirname -> variavel global pra entender a pasta em que eu estou

  constructor() {
    this.NOME_ARQUIVO = path.join(__dirname, 'herois.json')
  }

  async obterDados() {
    const dados = await readFileAsync(this.NOME_ARQUIVO)
    // convertemos a string do arquivo para um formato do objeto javascript
    return JSON.parse(dados.toString()); // converte o Buffer para o formato especifico
  }

  async cadastrar(heroi) {
    const dados = await this.obterDados()
    dados.push(heroi)
    // Transformar o tipo do arquivo para string novamente
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
  }

  async listar() {
    const dados = await this.obterDados()
    return dados;
  }

}

//para usar o contexto de async/ await
// sem precisar adicionar o .then 
// usarmos uma função que se auto executa
// na pratica é a mesma funçao MAIN
// com uma sintaxe diferente
// para o vscode nao se perder na busca da função no hoisting
;(async function main() {
  const database = new Database();
  await database.cadastrar({id: 1, name: 'War Machine'});
  const dados = await database.listar();
  console.log('xablau', dados)
})()

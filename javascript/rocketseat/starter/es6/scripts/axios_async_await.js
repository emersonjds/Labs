import axios from 'axios';

class API {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response);
    } catch (error) { 
      console.warn('Erro na API');
    }
  }
}

API.getUserInfo('emersonjds');

// Notas
// ao utilizar async await como o retorno nao tem o catch para manipulação direta como numa promise o ideal é utilizar o try / catch para caso algum erro aconteça na request
// O axios por padrao retorna uma promise para ser trabalhada, por isso async e await funcionam normalmente com ele 
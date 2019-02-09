import axios from 'axios'

// função delay
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
  delay().then(() => {
    console.log('1s');
    delay().then(() => {
      console.log('2s');
      delay().then(() => {
        console.log('3s');
      });
    })
  });
}

const umPorSegundoV2 = async () => {
  const response = await umPorSegundo();
  console.log(response);
}
umPorSegundoV2();

// -------------------------------------------------------------------------------
function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    }).catch(err => {
      console.log('Usuario nao existe')
    })
}

const getUserGithub = async (username) => {
  try {
    const response = await getUserFromGithub(username)
    console.log(response);
  } catch (error) {
    console.warn('Erro na API');
  }
}

getUserGithub('emersonjds');
getUserGithub('emersonasdfsda');

// -------------------------------------------------------------------------------

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");

// --------------------------------------------------------------------------

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};

buscaUsuario("emersonjds");
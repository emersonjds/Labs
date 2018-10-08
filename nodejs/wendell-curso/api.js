// Quando uma aplicação entra em segundo plano
// ela manda um sinal para o sistema operacional informando que terminou a execução
// pm2-runtime arquivo.js
// copiamos do pm2 e colamos no terminal da aplicação o link de conexao de monitoramento
// do pm2
// heroku config:set PM2_PUBLIC_KEY=3g2x5u8qm0ck65i PM2_SECRET_KEY=3y02zy2zy21vpvb 

// ---------------- Controle de Aplicação -----------------
// Para controlar e metrificar nossa aplicação
// vamos usar uma ferramenta , que caso aconteça alguma  
// situação inesperada ( cpu max, memoria max, espaco disco)
// vai alertar aos devs , ou reiniciar a aplicação
// npm i pm2 -g

// para inicializar uma aplicação e rodar em segundo plano
// pm2 start --name nomeAPI arquivo,js

// para parar a aplicação 
// pm2 stop nomeApi

// pm2 list - listar todas
// pm2 monit nomeApi - mostrar painel 
// caso queira mais instancia 
// pm2 start --name nomeApi 10      

// -------------- HEROKU ---------------------------
// Para logar no heroku
// -- heroku login

//heroku apps

//gitinit para inicializar o repositorio
//criar o .gitignore para ignorar os arquivos
// para criar uma aplicação
// heroku apps:create api-heroes-emersonjds
// git push heroku master

// para utilizar nossa aplicação no heroku
// criamos um script para ser executado em produção
// quando o heroku chamar nossa aplicação
// devera chamar via 
// npm run deploy
// script pre definidos -> start, test
// caso criar algum script diferente, deve colocar "run" no comando

// para trabalhar com o heroku criar um arquivo de configuração
// Procfile -> responsavel por falar como nossa aplicação rodara

// Fomos no mlab e criamos nosso database
// criamos nosso usuario e senha e adicionamos a string de conexao 
// no .env.prod
// para rodar nossa aplicação e testar
// NODE_ENV=production nodemon api.js

// Para dividir nossos ambientes, criamos 2 arquivos 
// que serao nossos arquivos de desenvolvimento e produção
// apos inserir esses arquivos em nosso ambiente , conseguimos
// obter esses dados a partir da variavel global 
// process.env do NodeJS
// para visualizar as variaveis dos arquivos, instalamos um modulo chamado dotenv
// npm i dotenv
const { config } = require('dotenv');
if (process.env.NODE_ENV === 'production')
  config({ path: 'config/.env.prod' })
else
  config({ path: 'config/.env.dev' })

// instalamos um modulo para padronizar mensagens de erro
// e status http
// npm install boom
const Boom = require('boom');

//Instalamos um modulo para observar alterações e reiniciar a aplicação automaticamente
// npm i nodemoon

//npm i vision@4 hapi-swagger@7 inert@4
// vision + inert expoem um front end e arquivos estaticos
// -> hapi-swagger cria uma documentação baseada nas rotas criadas

// instalando um modulo para autenticar token de autenticação, 
// nunca coloque senha
// nosso token podera ser descriptografado, mas nunca gerado novamente ou alterado

// Pacotes para tokenização

// npm i jsonwebtoken hapi-auth-jwt2

/*
 Quando trabalhamos com APIs Rest, trabalhamos com serviços sem estado
 Não temos mais sessão, não guardamos mais cookies
 Trafegamos apenas chaves de autenticação e não sabemos o estado
 Do usuario anterior 

 Para trabalhar com o Padão Rest, seguimos algumas especificações 

 AÇÃO      - METODO HTTP - URL - EXEMPLO
 CADASTRAR - POST        - /herois - POST -> /herois body {name: 'nome'}
 LISTAR    - GET         - /herois - GET -> /herois?ignore=10&limit=5
 REMOVER   - DELETE      - /herois/:id - DELETE /herois/1
 ATUALIZAR - PATCH      - /herois/:id - PATCH /herois/1 body {name: 'nome'}
 ATUALIZAR - PUT      - /herois/:id - PUT /herois/1 
    body {name: 'nome', idade: 15, dataNascimento: } 
    (SEMPRE OBJ COMPLETO)


- Atualizar a cor, de um produto, de um cliente
ATUALIZAR - PATCH 
    /customers/:id/product/:id/color
*/

//importamos o modulo nativo do NodeJS para criação de serviços web
// const http = require('http');
// http.createServer((request, response) => {
//   response.end('Ola NodeJS !!')
// }).listen(3000, () => console.log('Servidor rodando'))

// 1o passo: Instanciar o Servidor
// 2o passo: Definir a porta
// 3o passo: Definir a rota
// 4o passo: Inicializar o servidor

const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Jwt = require('jsonwebtoken');
const HapiJwt = require('hapi-auth-jwt2');
const Inert = require('inert');
const Database = require('./mongodb/databaseMongoDB');
//sabemos que com o Javascript , acontecem algumas bizarrices e nao temos tempo para validar essas coisas
// para evitar validar variaveis, valores, tipos e regras, podemos definir um conjunto de regras que serao validadas antes de chamar a nossa api
const Hapi = require('hapi');
const Joi = require('joi');
const app = new Hapi.Server();
app.connection({ port: process.env.PORT })
/*
 Para definir uma rota , definimos uma resposta de acordo com a chamada
 Quando um cliente pedir a /herois, com o metodo GET
 devemos chamar uma função que retorna seu resultado
 */

async function run(app) {

  // Para trabalharmos com swagger , registramos os plugins
  // definimos o HappiSwagger como o padrao de plugin HapiJS
  await app.register([
    Vision,
    Inert,
    {
      register: HapiSwagger,
      options: {
        info: {
          title: 'API Herois', version: 'v1.0'
        }
      }
    },
    HapiJwt
  ])

  // definimos uma estrategia pre definida de autenticacão
  // por padrao é sem autenticação , mas agora, todas as rotas
  // precisarao de um token nos headers para funcionar

  app.auth.strategy('jwt', 'jwt', {
    key: process.env.JWT_KEY,
    validateFunc: (decoded, request, callback) => {
      callback(null, true)
    },
    verifyOptions: {
      algorithms: ['HS256']
    }
  })
  app.auth.default('jwt')



  await Database.connect()

  app.route([
    {
      path: '/herois',
      method: 'GET',
      config: {
        tags: ['api'],
        description: 'Listar herois com paginação',
        notes: 'Deve enviar o ignore e limite para paginar',
        validate: {
          headers: Joi.object({
            authorization: Joi.string().required()
          }).unknown(),
          //podemos validar todo tipo de entrada da aplicação
          // ?nome=err = query
          // body = payload
          // headers = headers
          // herois/12334=> params

          // url final para validação
          query: {
            nome: Joi
              .string()
              .max(100),
            limite: Joi
              .number()
              .required()
              .max(150),
            ignore: Joi
              .number()
              .required()
          }
        }
      },
      handler: async (request, reply) => {
        try {
          const { limite, ignore, nome } = request.query;
          const queryConstains = {
            nome: { $regex: `.*${nome}.*`, $options: 'i' }
          }
          const filtro = nome ? queryConstains : {}
          // const limiteInteiro = parseInt(limite)
          // const ignoreInteiro = parseInt(ignore)
          return reply(await Database.listar(filtro, limite, ignore))
        } catch (error) {
          console.log('DEU RUIM', error)
          return reply(Boom.internal('deu ruim'));
        }
        // throw new Error('DEU RUIM')
        // return reply('Ola HApi !!!')
        //para pegar a query string 
        // /herois?limit=30%skipignore=0 
        //extraimos somente o necessario de uma variavel 
      }
    },
    {
      path: '/herois',
      method: 'POST',
      handler: async (request, reply) => {
        try {
          const heroi = { nome, poder, idade } = request.payload
          const resultado = await Database.cadastrar(heroi)
          return reply(resultado)
        } catch (error) {
          console.log('DEU RUIM', error)
          return reply(Boom.internal('Deu ruim'))
        }
      },
      config: {
        tags: ['api'],
        description: 'Criar novo heroi',
        notes: 'Deve enviar nome, poder e idade obrigatoriamente',
        validate: {
          headers: Joi.object({
            authorization: Joi.string().required()
          }).unknown(),
          payload: {
            nome: Joi
              .string()
              .required()
              .max(100)
              .min(5),
            poder: Joi
              .string()
              .required()
              .max(100)
              .min(3),
            idade: Joi
              .number()
              .required()
              .min(18)
              .max(150)
          }
        }
      }
    },
    {
      path: '/herois/{id}',
      method: 'DELETE',
      handler: async (request, reply) => {
        try {
          const { id } = request.params;
          const result = await Database.remover({ _id: id })
          return reply(result)
        } catch (e) {
          console.log('DEU RUIM', e)
          return reply(Boom.internal('Deu ruim'))
        }
      },
      config: {
        tags: ['api'],
        description: 'Deletar um heroi',
        notes: 'Deve enviar o ID obrigatoriamente',
        validate: {
          headers: Joi.object({
            authorization: Joi.string().required()
          }).unknown(),
          params: {
            id: Joi.string().required()
          }
        }
      }
    },
    {
      path: '/herois/{id}',
      method: 'PATCH',
      handler: async (request, reply) => {
        try {
          //simulando um erro
          // throw Error()
          const { id } = request.params;
          const heroi = { nome, poder, idade } = request.payload;
          const heroiString = JSON.stringify(heroi)
          const heroiJSON = JSON.parse(heroiString)
          const resultado = await Database.atualizar(id, heroiJSON)
          return reply(resultado)
        } catch (error) {
          console.log('DEU RUIM', error)
          return reply(Boom.internal('Deu ruim'))
        }
      },
      config: {
        tags: ['api'],
        description: 'Atualizar um heroi',
        notes: 'Deve enviar o ID obrigatoriamente',
        validate: {
          headers: Joi.object({
            authorization: Joi.string().required()
          }).unknown(),
          params: {
            id: Joi.string().required()
          },
          payload: {
            nome: Joi
              .string()
              .max(100)
              .min(5),
            poder: Joi
              .string()
              .max(100)
              .min(3),
            idade: Joi
              .number()
              .min(18)
              .max(150)
          }
        }
      }
    },
    {
      path: '/login',
      method: 'POST',
      handler: (request, reply) => {
        const { usuario, senha } = request.payload
        if (usuario !== process.env.USUARIO || senha !== parseInt(process.env.SENHA)) {
          return reply(Boom.unauthorized())
        }
        const token = Jwt.sign({ usuario: usuario }, process.env.JWT_KEY)
        return reply({ token })
      },
      config: {
        //desabilitamos a autenticação para conseguir um token
        auth: false,
        tags: ['api'],
        description: 'Efetuar login',
        validate: {
          payload: {
            usuario: Joi.string().required(),
            senha: Joi.number().integer().required()
          }
        }
      }
    }
  ])
  await app.start()
  console.log(`Api rodando em ${process.env.NODE_ENV || "dev"}`);
}

run(app)

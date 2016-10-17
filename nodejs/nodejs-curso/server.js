//use strict serve para 
//limitar os desenvolvedores
//a nao criarem variaveis perdidas
'use strict';

//importamos o HapiJS para nosso projeto
const Hapi = require('hapi');

//importamos a biblioteca para validar as requisicoes
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

let products = [];
//metodo para criar as rotas
server.route([{
    //o caminho a ser chamado
    path: '/products',
    //o tipo requisicao
    method: 'GET',

    //o metodo que controla a requiçao'
    handler: (req, reply) => {
        return reply(products);
    }
}, {
        path: '/products',
        method: 'POST',
        config: {
            handler: (req, reply) => {
                //recebemos o objeto da requisicao
                const produto = req.payload;
                produto.id = 1;
                products.push(produto);
                return reply(true);
            },
            //criamos o obj de validacao
            validate: {
                //fizemos as validacoes
                payload: {
                    name: Joi.string().min(3).max(20).required(),
                    price: Joi.number().required()
                }
            }
        }
    },
    {
        path: '/products/{id}',
        method: 'DELETE',
        config: {
            handler: (req, reply) => {
                try {
                    var id = req.params.id;
                    var product = products.filter(item => {
                        return item.id == id
                    });

                    if (product.length === 0) throw new Error('Produto inexistente');
                    products.pop(product[0]);

                    return reply(true);
                }
                catch (e) { 
                    console.log('e', e);
                    return reply(false);
                }
            },
            //criamos o obj de validacao
            validate: {
                //fizemos as validacoes
                params: {
                    id: Joi.number().required()
                }
            }
        }
    }])

server.start(() => {
    console.log('servidor rodando!!');
});

//deixa nosso servidor publico
module.exports = server;
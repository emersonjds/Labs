import express from 'express';
import { helloWorld } from './routes';
import createUser from './services/CreateUser';

const app = express();

app.get('/', (req, res) => {
  const user = createUser({name: 'Emerson', email: 'enerson@example.com', passwd: '123456', techs: ['Js', 'Python'], secondTechs: ['Javascripts' ]});
  return res.json(user)
});

app.listen(3000, () => {
  console.log('server rodando')
});





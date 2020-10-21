import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

//habilitar que a aplicação consiga entender dados vindos em JSON
app.use(express.json());

app.post('/users', (req, res) => {
  const {name, email} = req.body;

  const user = {name, email}
  return res.json(user);
})

app.get('/', (req, res) => {
  return res.json({message: 'GET'})
})

app.listen(3000, () => {
  console.log('Backend executando 🚀')
})
import express from 'express';
import routes from '../routes/index';
import cors from 'cors';

const app = express();

app.use(cors());

//habilitar que a aplicação consiga entender dados vindos em JSON
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log('Backend executando 🚀')
})
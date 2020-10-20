import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  return res.json({message: 'GET ROUTE'})
})

app.listen(3000, () => {
  console.log('Backend executando 🚀')
})
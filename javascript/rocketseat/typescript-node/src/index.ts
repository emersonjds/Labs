import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Backend executando 🚀'})
})

app.listen(3000)
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello TS'})
})

app.listen(3000, () => {
  console.log('server rodando')
})
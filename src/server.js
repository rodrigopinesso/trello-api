require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB(); // aqui a conexão com o banco é chamada

app.get('/', (req, res) => {
  res.send('API Rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
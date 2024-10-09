const express = require('express');
const cors = require('cors'); // Para permitir requisições de outras origens

const app = express();
const port = 3000;

// Middleware para interpretar JSON e lidar com CORS
app.use(express.json());
app.use(cors());

// Lista para armazenar as mensagens
let mensagens = [{nome: 'ithalo', mensagem: 'oi'}];

// Rota para receber uma mensagem (POST)
app.post('/mensagem', (req, res) => {
    const { nome, mensagem } = req.body;
    if (!nome || !mensagem) {
        return res.status(400).json({ error: 'Nome e mensagem são obrigatórios.' });
    }
    const novaMensagem = { nome, mensagem, timestamp: new Date() };
    mensagens.push(novaMensagem);
    res.status(201).json({ message: 'Mensagem enviada com sucesso!' });
});

// Rota para listar as mensagens (GET)
app.get('/mensagens', (req, res) => {
    res.json(mensagens);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

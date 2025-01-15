import express, { response } from 'express';

const PORT = 3333;

const app = express();

app.use(express.json());

app.get('/products', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
});

app.post('/products', (request, response) => {
    const { name, price } = request.body;

    response.send(`O produto ${name} custa ${price} reais`);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

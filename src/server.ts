import express, { response } from 'express';
import { myMiddleware } from './middlewares/my-middleware.js';

const PORT = 3333;

const app = express();

app.use(express.json());

// Uso do middleware de maneira global
// app.use(myMiddleware);

app.get('/products', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
});

// Uso do middleware de maneira especifica
app.post('/products', myMiddleware, (request, response) => {
    const { name, price } = request.body;

    // response.send(`O produto ${name} custa ${price} reais`);

    response.status(201).json({ name, price, user_id: request.user_id });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

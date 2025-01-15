import express, { response } from 'express';

const PORT = 3333;

const app = express();

app.get('/products/:id/:user', (request, response) => {
    const { id, user } = request.params;

    response.send(`Produto ${id} do usuário ${user}`);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

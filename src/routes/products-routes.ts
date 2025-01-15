import { Router } from 'express';

import { myMiddleware } from '../middlewares/my-middleware';

const productsRoutes = Router();

productsRoutes.get('/:id', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
});

// Uso do middleware de maneira especifica
productsRoutes.post('/', myMiddleware, (request, response) => {
    const { name, price } = request.body;

    // response.send(`O produto ${name} custa ${price} reais`);

    response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };

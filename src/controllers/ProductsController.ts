import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';

class ProductsController {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * remove - DELETE para remover um registro.
     */

    index(request: Request, response: Response) {
        const { page, limit } = request.query;

        response.send(`Página ${page} de ${limit}`);
    }

    create(request: Request, response: Response) {
        const { name, price } = request.body;

        // throw new Error('Erro ao criar um produto');
        // throw new AppError('Erro ao tentar criar um produto');

        response.status(201).json({ name, price, user_id: request.user_id });
    }
}

export { ProductsController };

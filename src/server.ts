import express, {
    ErrorRequestHandler,
    Request,
    Response,
    NextFunction,
} from 'express';

import { routes } from './routes';

import { AppError } from './utils/AppError';

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

// Deixando o tratamento de erros por último, pois ele irá tratar todas as funções anteriores

/**
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro do servidor.
 */
app.use(
    (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
            return response
                .status(error.statusCode)
                .json({ message: error.message });
        }

        response.status(500).json({ message: error.message });
    }
);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

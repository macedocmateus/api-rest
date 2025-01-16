import express, {
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler,
} from 'express';

import { routes } from './routes';

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

// Deixando o tratamento de erros por último, pois ele irá tratar todas as funções anteriores
app.use(
    (error: Error, request: Request, response: Response, _: NextFunction) => {
        response.status(500).json({ message: error.message });
    }
);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

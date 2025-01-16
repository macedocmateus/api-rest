import { Router } from 'express';
import { myMiddleware } from '../middlewares/my-middleware';
import { ProductsController } from '../controllers/ProductsController';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/', productsController.index);

// Uso do middleware de maneira especifica
productsRoutes.post('/', myMiddleware, productsController.create);

export { productsRoutes };

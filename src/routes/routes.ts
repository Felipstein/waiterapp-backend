import { Router } from 'express';
import { categoryRoutes } from './categories.routes';
import { orderRoutes } from './orders.routes';
import { productRoutes } from './products.routes';

const routes = Router();

routes.use('/categories', categoryRoutes);
routes.use('/orders', orderRoutes);
routes.use('/products', productRoutes);

export { routes };

import { Router } from 'express';
import { createCategory } from '../useCases/categories/createCategory';
import { listCategories } from '../useCases/categories/listCategories';
import { listProductsByCategory } from '../useCases/categories/listProductsByCategory';

const route = Router();

route.get('/', listCategories);

route.post('/', createCategory);

route.get('/:categoryId/products', listProductsByCategory);

export { route as categoryRoutes };

import { Router } from 'express';
import { createCategoryFactory } from '../modules/Category/createCategory';
import { listCategories } from '../useCases/categories/listCategories';
import { listProductsByCategory } from '../useCases/categories/listProductsByCategory';

const route = Router();

route.get('/', listCategories);

route.post('/', createCategoryFactory().controller.handle);

route.get('/:categoryId/products', listProductsByCategory);

export { route as categoryRoutes };

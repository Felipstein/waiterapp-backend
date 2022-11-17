import { Router } from 'express';
import { createCategoryFactory } from '../modules/Category/createCategory';
import { listCategoriesFactory } from '../modules/Category/listCategories';
import { listProductsByCategory } from '../useCases/categories/listProductsByCategory';

const route = Router();

route.get('/', listCategoriesFactory().controller.handle);

route.post('/', createCategoryFactory().controller.handle);

route.get('/:categoryId/products', listProductsByCategory);

export { route as categoryRoutes };

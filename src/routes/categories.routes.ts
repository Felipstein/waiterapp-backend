import { Router } from 'express';
import { createCategoryFactory } from '../modules/Category/createCategory';
import { listCategoriesFactory } from '../modules/Category/listCategories';
import { listProductsByCategoryIdFactory } from '../modules/Category/listProductsByCategoryId';

const route = Router();

route.get('/', listCategoriesFactory().controller.handle);

route.post('/', createCategoryFactory().controller.handle);

route.get('/:categoryId/products', listProductsByCategoryIdFactory().controller.handle);

export { route as categoryRoutes };

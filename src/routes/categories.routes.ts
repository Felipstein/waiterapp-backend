import { Router } from 'express';
import { createCategoryFactory } from '../modules/Category/createCategory';
import { listCategoriesFactory } from '../modules/Category/listCategories';
import { listProductsByCategoryIdFactory } from '../modules/Category/listProductsByCategoryId';

const route = Router();

route.get('/', (req, res) => {
  return listCategoriesFactory().controller.handle(req, res);
});

route.post('/', (req, res) => {
  return createCategoryFactory().controller.handle(req, res);
});

route.get('/:categoryId/products', (req, res) => {
  return listProductsByCategoryIdFactory().controller.handle(req, res);
});

export { route as categoryRoutes };

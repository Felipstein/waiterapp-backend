import { Router } from 'express';
import { createCategory } from '../useCases/categories/createCategory';
import { listCategories } from '../useCases/categories/listCategories';

const route = Router();

route.get('/', listCategories);

route.post('/', createCategory);

route.get('/:categoryId/products', (req, res) => {
  res.send('Getting products by category');
});

export { route as categoryRoutes };

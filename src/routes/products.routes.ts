import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import { createProductFactory } from '../modules/Product/createProduct';
import { deleteProductFactory } from '../modules/Product/deleteProduct';
import { listProductsFactory } from '../modules/Product/listProducts';

const route = Router();
const upload = multer(multerConfig);

route.get('/', (req, res) => {
  return listProductsFactory().controller.handle(req, res);
});

route.post('/', upload.single('image'), (req, res) => {
  return createProductFactory().controller.handle(req, res);
});

route.delete('/:productId', (req, res) => {
  return deleteProductFactory().controller.handle(req, res);
});

export { route as productRoutes };

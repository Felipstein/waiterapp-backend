import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import { listProductsFactory } from '../modules/Product/listProducts';
import { createProduct } from '../useCases/products/createProduct';

const route = Router();
const upload = multer(multerConfig);

route.get('/', (req, res) => {
  return listProductsFactory().controller.handle(req, res);
});

route.post('/', upload.single('image'), createProduct);

export { route as productRoutes };

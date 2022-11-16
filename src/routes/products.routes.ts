import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import { createProduct } from '../useCases/products/createProduct';
import { listProducts } from '../useCases/products/listProducts';

const route = Router();
const upload = multer(multerConfig);

route.get('/', listProducts);

route.post('/', upload.single('image'), createProduct);

export { route as productRoutes };

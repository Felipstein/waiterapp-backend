import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;

  if (!isValidObjectId(categoryId)) {
    return res.json([]);
  }

  const products = await Product.find().where('category').equals(categoryId);

  return res.json(products);
}

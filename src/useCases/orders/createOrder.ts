import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  if (!table) {
    return res.status(400).json({ message: 'Mesa é obrigatória.' });
  }

  if (!products) {
    return res.status(400).json({ message: 'Produtos são obrigatórios.' });
  }

  if (!Array.isArray(products)) {
    return res.status(400).json({ message: 'Produtos inválidos.' });
  }

  if (products.some(({ product }) => !isValidObjectId(product))) {
    return res.status(400).json({ message: 'Produtos inválidos.' });
  }

  const order = await Order.create({
    table,
    products,
  });

  return res.status(201).json(order);
}

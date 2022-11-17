import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  const orders = await Order.find()
    .sort({ createdAt: 1 })
    .populate('products.product');

  return res.json(orders);
}

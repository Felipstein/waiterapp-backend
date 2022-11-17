import { isValidObjectId } from 'mongoose';
import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function deleteOrder(req: Request, res: Response) {
  const { orderId } = req.params;

  if (!isValidObjectId(orderId)) {
    return res.sendStatus(204);
  }

  await Order.findByIdAndDelete(orderId);

  return res.sendStatus(204);
}

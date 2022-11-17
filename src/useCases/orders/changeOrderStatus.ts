import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!isValidObjectId(orderId)) {
    return res.status(400).json({ message: 'Pedido não encontrado.' });
  }

  if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
    return res.status(400).json({ message: 'Status inválido.' });
  }

  await Order.findByIdAndUpdate(orderId, { status });

  return res.sendStatus(204);
}

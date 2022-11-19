import { APIError } from './../../../errors/APIError';
import { ChangeOrderStatusDTO } from './ChangeOrderStatusDTO';
import { IOrdersRepository } from './../../../repositories/IOrdersRepository';
import { isValidObjectId } from 'mongoose';
import { Order } from '../../../models/Order';
export class ChangeOrderStatusUseCases {

  constructor(
    private ordersRepository: IOrdersRepository,
  ) { }

  async execute({ orderId, status }: ChangeOrderStatusDTO): Promise<void> {
    if (!orderId || !isValidObjectId(orderId)) {
      throw new APIError(400, 'Pedido não encontrado.');
    }

    if (!status) {
      throw new APIError(400, 'Status é obrigatório.');
    }

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      throw new APIError(400, 'Status inválido.');
    }

    await Order.findByIdAndUpdate(orderId, { status });
  }

}

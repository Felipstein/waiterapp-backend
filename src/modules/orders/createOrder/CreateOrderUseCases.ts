import { isValidObjectId } from 'mongoose';
import { APIError } from './../../../errors/APIError';
import { CreateOrderDTO } from './CreateOrderDTO';
import { IOrder, Order } from '../../../models/Order';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';

export class CreateOrderUseCases {

  constructor(
    private ordersRepository: IOrdersRepository,
  ) { }

  async execute({ table, products }: CreateOrderDTO): Promise<IOrder | null> {
    if (!table) {
      throw new APIError(400, 'Mesa é obrigatória.');
    }

    if (!products || !Array.isArray(products)) {
      throw new APIError(400, 'Produtos são obrigatórios.');
    }

    const hasInvalidProductId = products.some(({ product }) => !isValidObjectId(product));
    if (hasInvalidProductId) {
      throw new APIError(400, 'Produto(s) inválido(s).');
    }

    const order = await Order.create({
      table, products,
    });

    return order;
  }

}

import { isValidObjectId } from 'mongoose';
import { APIError } from './../../../errors/APIError';
import { CreateOrderDTO } from './CreateOrderDTO';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';
import { io } from '../../../app';
import { IOrder, Order } from '../../../models/Order';

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

    const order = await Order.create({ table, products });
    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    return order;
  }

}

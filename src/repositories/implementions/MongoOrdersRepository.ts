import { Types } from 'mongoose';
import { IOrder, Order } from '../../models/Order';
import { IOrdersRepository } from '../IOrdersRepository';

export class MongoOrdersRepository implements IOrdersRepository {

  async listAll(): Promise<IOrder[]> {
    return await Order.find().sort({ createdAt: 1 }).populate('products.product');
  }

  async create({ table, status, products }: IOrder): Promise<IOrder | null> {
    const order = await Order.create({
      table, status, products,
    });

    return order;
  }

  async changeStatus(orderId: Types.ObjectId, newStatus: 'WAITING' | 'IN_PRODUCTION' | 'DONE'): Promise<void> {
    await Order.findByIdAndUpdate(orderId, { status: newStatus });
  }

  async delete(orderId: string): Promise<void> {
    await Order.findByIdAndDelete(orderId);
  }

}

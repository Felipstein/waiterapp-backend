import { Types } from 'mongoose';
import { IOrder } from './../models/Order';

export interface IOrdersRepository {

  listAll(): Promise<IOrder[]>;

  create({ table, status, products }: IOrder): Promise<IOrder | null>;

  changeStatus(orderId: Types.ObjectId, newStatus: 'WAITING' | 'IN_PRODUCTION' | 'DONE'): Promise<void>;

  delete(orderId: string): Promise<void>;

}

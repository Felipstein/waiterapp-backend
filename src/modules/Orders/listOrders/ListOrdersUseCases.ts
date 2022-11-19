import { IOrder } from '../../../models/Order';
import { IOrdersRepository } from './../../../repositories/IOrdersRepository';
export class ListOrdersUseCases {

  constructor(
    private ordersRepositroy: IOrdersRepository,
  ) { }

  async execute(): Promise<IOrder[]> {
    const orders = await this.ordersRepositroy.listAll();

    return orders;
  }

}

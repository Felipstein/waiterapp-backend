import { isValidObjectId } from 'mongoose';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';

export class DeleteOrderUseCases {

  constructor(
    private ordersRepository: IOrdersRepository,
  ) { }

  async execute(orderId: string): Promise<void> {
    if (!isValidObjectId(orderId)) {
      return;
    }

    await this.ordersRepository.delete(orderId);
  }

}

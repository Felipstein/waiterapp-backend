import { CreateOrderController } from './CreateOrderController';
import { currentOrdersRepository } from '../../../repositories';
import { CreateOrderUseCases } from './CreateOrderUseCases';

export function createOrderFactory() {
  const createOrderUseCases = new CreateOrderUseCases(currentOrdersRepository);
  const createOrderController = new CreateOrderController(createOrderUseCases);

  return { controller: createOrderController, useCases: createOrderUseCases };
}

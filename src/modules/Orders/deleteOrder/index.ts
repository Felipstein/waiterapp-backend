import { DeleteORderController } from './DeleteOrderController';
import { currentOrdersRepository } from '../../../repositories';
import { DeleteOrderUseCases } from './DeleteOrderUseCases';

export function deleteOrderFactory() {
  const deleteOrderUseCases = new DeleteOrderUseCases(currentOrdersRepository);
  const deleteOrderController = new DeleteORderController(deleteOrderUseCases);

  return { controller: deleteOrderController, useCases: deleteOrderUseCases };
}

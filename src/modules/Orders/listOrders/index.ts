import { ListOrdersController } from './ListOrdersController';
import { currentOrdersRepository } from '../../../repositories';
import { ListOrdersUseCases } from './ListOrdersUseCases';

export function listOrdersFactory() {
  const listOrdersUseCases = new ListOrdersUseCases(currentOrdersRepository);
  const listOrdersController = new ListOrdersController(listOrdersUseCases);

  return { controller: listOrdersController, useCases: listOrdersUseCases };
}

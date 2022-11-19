import { ChangeOrderStatusController } from './ChangeOrderStatusController';
import { currentOrdersRepository } from '../../../repositories';
import { ChangeOrderStatusUseCases } from './ChangeOrderStatusUseCases';

export function changeOrderStatusFactory() {
  const changeOrderStatusUseCases = new ChangeOrderStatusUseCases(currentOrdersRepository);
  const changeOrderStatusController = new ChangeOrderStatusController(changeOrderStatusUseCases);

  return { controller: changeOrderStatusController, useCases: changeOrderStatusUseCases };
}

import { ListProductsController } from './ListProductsController';
import { currentProductsRepository } from '../../../repositories';
import { ListProductsUseCases } from './ListProductsUseCases';

export function listProductsFactory() {
  const listProductsUseCases = new ListProductsUseCases(currentProductsRepository);
  const listProductsController = new ListProductsController(listProductsUseCases);

  return { controller: listProductsController, useCases: listProductsUseCases };
}

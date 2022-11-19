import { DeleteProductController } from './DeleteProductController';
import { currentProductsRepository } from '../../../repositories';
import { DeleteProductUseCases } from './DeleteProductUseCases';

export function deleteProductFactory() {
  const deleteProductUseCases = new DeleteProductUseCases(currentProductsRepository);
  const deleteProductController = new DeleteProductController(deleteProductUseCases);

  return { controller: deleteProductController, useCases: deleteProductUseCases };
}

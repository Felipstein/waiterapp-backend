import { ListProductsByCategoryController } from './ListProductsByCategoryIdController';
import { currentRepository } from '../../../repositories';
import { ListProductsByCategoryUseCases } from './ListProductsByCategoryUseCases';

export function listProductsByCategoryIdFactory() {
  const listProductsByCategoryIdUseCases = new ListProductsByCategoryUseCases(currentRepository);
  const listProductsByCategoryIdController = new ListProductsByCategoryController(listProductsByCategoryIdUseCases);

  return { controller: listProductsByCategoryIdController, useCases: listProductsByCategoryIdUseCases };
}

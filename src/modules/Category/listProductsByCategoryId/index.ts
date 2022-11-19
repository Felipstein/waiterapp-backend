import { ListProductsByCategoryController } from './ListProductsByCategoryIdController';
import { currentCategoriesRepository } from '../../../repositories';
import { ListProductsByCategoryUseCases } from './ListProductsByCategoryUseCases';

export function listProductsByCategoryIdFactory() {
  const listProductsByCategoryIdUseCases = new ListProductsByCategoryUseCases(currentCategoriesRepository);
  const listProductsByCategoryIdController = new ListProductsByCategoryController(listProductsByCategoryIdUseCases);

  return { controller: listProductsByCategoryIdController, useCases: listProductsByCategoryIdUseCases };
}

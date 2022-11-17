import { CreateProductController } from './CreateProductController';
import { currentCategoriesRepository, currentProductsRepository } from '../../../repositories';
import { CreateProductUseCases } from './CreateProductUseCases';

export function createProductFactory() {
  const createProductUseCases = new CreateProductUseCases(currentProductsRepository, currentCategoriesRepository);
  const createProductController = new CreateProductController(createProductUseCases);

  return { controller: createProductController, useCases: createProductUseCases };
}

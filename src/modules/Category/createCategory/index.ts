import { CreateCategoryController } from './CreateCategoryController';
import { currentRepository } from '../../../repositories';
import { CreateCategoryUseCases } from './CreateCategoryUseCases';

export function createCategoryFactory() {
  const createCategoryUseCases = new CreateCategoryUseCases(currentRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCases);

  return { controller: createCategoryController, useCases: createCategoryUseCases };
}

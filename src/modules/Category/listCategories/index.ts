import { ListCategoriesController } from './LIstCategoriesController';
import { currentRepository } from '../../../repositories';
import { ListCategoriesUseCases } from './ListCategoriesUseCases';

export function listCategoriesFactory() {
  const listCategoriesUseCases = new ListCategoriesUseCases(currentRepository);
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCases);

  return { controller: listCategoriesController, useCases: listCategoriesUseCases };
}

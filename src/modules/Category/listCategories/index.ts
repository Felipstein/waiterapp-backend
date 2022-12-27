import { ListCategoriesController } from './LIstCategoriesController';
import { currentCategoriesRepository } from '../../../repositories';
import { ListCategoriesUseCases } from './ListCategoriesUseCases';

export function listCategoriesFactory() {
  const listCategoriesUseCases = new ListCategoriesUseCases(currentCategoriesRepository);
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCases);

  return { controller: listCategoriesController, useCases: listCategoriesUseCases };
}

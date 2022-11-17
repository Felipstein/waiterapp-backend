import { ICategory } from '../../../models/Category';
import { ICategoriesRepository } from './../../../repositories/ICategoriesRepository';
export class ListCategoriesUseCases {

  constructor(
    private categoriesRepository: ICategoriesRepository,
  ) { }

  async execute(): Promise<ICategory[]> {
    const categories = await this.categoriesRepository.listAll();

    return categories;
  }

}

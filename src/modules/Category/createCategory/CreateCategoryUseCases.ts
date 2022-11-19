import { CreateCategoryDTO } from './CreateCategoryDTO';
import { APIError } from './../../../errors/APIError';
import { Category, ICategory } from '../../../models/Category';
import { ICategoriesRepository } from './../../../repositories/ICategoriesRepository';
export class CreateCategoryUseCases {

  constructor(
    private categoriesRepository: ICategoriesRepository,
  ) { }

  async execute({ name, icon }: CreateCategoryDTO): Promise<ICategory | null> {
    if (!name) {
      throw new APIError(400, 'Nome é obrigatório.');
    }

    if (!icon) {
      throw new APIError(400, 'Icone é obrigatório.');
    }

    const category = this.categoriesRepository.create({ name, icon });

    return category;
  }

}

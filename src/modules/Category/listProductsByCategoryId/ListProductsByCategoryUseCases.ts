import { isValidObjectId } from 'mongoose';
import { IProduct } from '../../../models/Product';
import { ICategoriesRepository } from './../../../repositories/ICategoriesRepository';
export class ListProductsByCategoryUseCases {

  constructor(
    private categoriesRepository: ICategoriesRepository,
  ) { }

  async execute(categoryId: string): Promise<IProduct[]> {
    if (!isValidObjectId(categoryId)) {
      return [];
    }

    const products = await this.categoriesRepository.listProductsByCategoryId(categoryId);

    return products;
  }

}

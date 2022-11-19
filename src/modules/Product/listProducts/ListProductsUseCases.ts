import { IProduct } from '../../../models/Product';
import { IProductsRepository } from '../../../repositories/IProductsRepository';

export class ListProductsUseCases {

  constructor(
    private productsRepository: IProductsRepository,
  ) { }

  async execute(): Promise<IProduct[]> {
    const products = await this.productsRepository.listAll();

    return products;
  }

}

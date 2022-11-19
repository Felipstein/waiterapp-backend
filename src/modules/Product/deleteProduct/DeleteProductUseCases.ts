import { isValidObjectId } from 'mongoose';
import { IProductsRepository } from '../../../repositories/IProductsRepository';
import { DeleteImage } from '../../../utils/DeleteImage';

export class DeleteProductUseCases {

  constructor(
    private productsRepository: IProductsRepository,
  ) { }

  async execute(productId: string): Promise<void> {
    if (!isValidObjectId(productId)) {
      return;
    }

    await new DeleteImage(this.productsRepository).execute(productId);
    await this.productsRepository.delete(productId);
  }

}

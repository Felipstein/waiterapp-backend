import { ICategoriesRepository } from './../../../repositories/ICategoriesRepository';
import { isValidObjectId } from 'mongoose';
import { APIError } from './../../../errors/APIError';
import { IProduct } from '../../../models/Product';
import { IProductsRepository } from './../../../repositories/IProductsRepository';
import { CreateProductDTO } from './CreateProductDTO';
import { parse } from 'dotenv';

export class CreateProductUseCases {

  constructor(
    private productsRepository: IProductsRepository,
    private categoriesRepository: ICategoriesRepository,
  ) { }

  async execute({ name, description, image, price, ingredients, category }: CreateProductDTO): Promise<IProduct | null> {
    if (!name) {
      throw new APIError(400, 'Nome é obrigatório.');
    }

    if (!description) {
      throw new APIError(400, 'Descrição é obrigatória.');
    }

    if (!image) {
      throw new APIError(400, 'Imagem é obrigatória.');
    }

    if (!price) {
      throw new APIError(400, 'Preço é obrigatório.');
    }

    if (!category) {
      throw new APIError(400, 'Categoria é obrigatória.');
    }

    if (!isValidObjectId(category)) {
      throw new APIError(400, 'Categoria não encontrada.');
    }

    const categoryExists = await this.categoriesRepository.findById(category.toString());
    if (!categoryExists) {
      throw new APIError(400, 'Categoria não encontrada.');
    }

    const product = await this.productsRepository.create({
      name,
      description,
      imagePath: image.filename,
      price,
      ingredients,
      category,
    });

    return product;
  }

}

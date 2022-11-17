import { IProduct, Product } from '../../models/Product';
import { IProductsRepository } from '../IProductsRepository';

export class MongoProductsRepository implements IProductsRepository {

  async listAll(): Promise<IProduct[]> {
    const products = await Product.find();

    return products;
  }

  async create({ name, description, imagePath, price, ingredients, category }: IProduct): Promise<IProduct> {
    const product = await Product.create({ name, description, imagePath, price, ingredients, category });

    return product;
  }

}

import { IProduct, Product } from '../../models/Product';
import { IProductsRepository } from '../IProductsRepository';

export class MongoProductsRepository implements IProductsRepository {

  async listAll(): Promise<IProduct[]> {
    const products = await Product.find();

    return products;
  }

  async listById(productId: string): Promise<IProduct | null> {
    const product = await Product.findById(productId);

    return product;
  }

  async create({ name, description, imagePath, price, ingredients, category }: IProduct): Promise<IProduct | null> {
    const product = await Product.create({ name, description, imagePath, price, ingredients, category });

    return product;
  }

  async delete(productId: string): Promise<void> {
    await Product.findByIdAndRemove(productId);
  }

}

import { IProduct } from '../models/Product';

export interface IProductsRepository {

  listAll(): Promise<IProduct[]>;

  listById(productId: string): Promise<IProduct | null>;

  create({ name, description, imagePath, price, ingredients, category }: IProduct): Promise<IProduct | null>;

  delete(productId: string): Promise<void>;

}

import { IProduct } from '../models/Product';

export interface IProductsRepository {

  listAll(): Promise<IProduct[]>;

  create({ name, description, imagePath, price, ingredients, category }: IProduct): Promise<IProduct | null>;

}

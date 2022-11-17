import { IProduct } from './../models/Product';
import { ICategory } from '../models/Category';

export interface ICategoriesRepository {

  listAll(): Promise<ICategory[]>;

  create({ name, icon }: ICategory): Promise<ICategory | null>;

  listProductsByCategoryId(categoryId: string): Promise<IProduct[]>;

}

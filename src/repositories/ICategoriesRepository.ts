import { IProduct } from './../models/Product';
import { ICategory } from '../models/Category';

export interface ICategoriesRepository {

  listAll(): Promise<ICategory[]>;

  findById(id: string): Promise<ICategory[] | null>;

  create({ name, icon }: ICategory): Promise<ICategory | null>;

  listProductsByCategoryId(categoryId: string): Promise<IProduct[]>;

}

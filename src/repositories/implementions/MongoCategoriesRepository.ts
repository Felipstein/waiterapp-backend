import { Category, ICategory } from '../../models/Category';
import { IProduct, Product } from '../../models/Product';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class MongoCategoriesRepository implements ICategoriesRepository {

  async listAll(): Promise<ICategory[]> {
    return await Category.find();
  }

  async create({ name, icon }: ICategory): Promise<ICategory | null> {
    const category = await Category.create({ name, icon });

    return category;
  }

  async listProductsByCategoryId(categoryId: string): Promise<IProduct[]> {
    const products = await Product.find().where('category').equals(categoryId);

    return products.map(product => ({
      name: product.name,
      description: product.description,
      imagePath: product.imagePath,
      price: product.price,
      ingredients: product.ingredients,
      category: product.category,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as IProduct | any);
  }

}
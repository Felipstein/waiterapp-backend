import { MongoProductsRepository } from './implementions/MongoProductsRepository';
import { MongoCategoriesRepository } from './implementions/MongoCategoriesRepository';

const currentCategoriesRepository = new MongoCategoriesRepository();
const currentProductsRepository = new MongoProductsRepository();

export { currentCategoriesRepository, currentProductsRepository };

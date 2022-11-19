import { MongoCategoriesRepository } from './implementions/MongoCategoriesRepository';
import { MongoProductsRepository } from './implementions/MongoProductsRepository';
import { MongoOrdersRepository } from './implementions/MongoOrdersRepository';

const currentCategoriesRepository = new MongoCategoriesRepository();
const currentProductsRepository = new MongoProductsRepository();
const currentOrdersRepository = new MongoOrdersRepository();

export { currentCategoriesRepository, currentProductsRepository, currentOrdersRepository };

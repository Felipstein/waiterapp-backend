import { Request, Response } from 'express';
import { ListCategoriesUseCases } from './ListCategoriesUseCases';
export class ListCategoriesController {

  constructor(
    private listCategoriesUseCases: ListCategoriesUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCases.execute();

    return res.json(categories);
  }

}

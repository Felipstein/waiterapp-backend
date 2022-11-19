import { Request, Response } from 'express';
import { ListProductsByCategoryUseCases } from './ListProductsByCategoryUseCases';
export class ListProductsByCategoryController {

  constructor(
    private listProductsByCategoryUseCases: ListProductsByCategoryUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.params;

    const categories = await this.listProductsByCategoryUseCases.execute(categoryId);

    return res.json(categories);
  }

}

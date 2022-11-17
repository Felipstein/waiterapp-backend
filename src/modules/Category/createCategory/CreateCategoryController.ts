import { Request, Response } from 'express';
import { CreateCategoryUseCases } from './CreateCategoryUseCases';
export class CreateCategoryController {

  constructor(
    private createCategoryUseCases: CreateCategoryUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, icon } = req.body;

    const category = await this.createCategoryUseCases.execute({ name, icon });

    return res.status(201).json(category);
  }

}

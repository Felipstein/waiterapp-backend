import { CreateProductUseCases } from './CreateProductUseCases';
import { Request, Response } from 'express';
export class CreateProductController {

  constructor(
    private createProductUseCases: CreateProductUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, price, ingredients, category } = req.body;

    const product = await this.createProductUseCases.execute({ name, description, price: Number(price), image: req.file, ingredients, category });

    return res.json(product);
  }

}

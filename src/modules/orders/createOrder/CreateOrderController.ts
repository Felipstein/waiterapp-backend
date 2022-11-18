import { Request, Response } from 'express';
import { CreateOrderUseCases } from './CreateOrderUseCases';
export class CreateOrderController {

  constructor(
    private createOrderUseCases: CreateOrderUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { table, products } = req.body;

    const order = await this.createOrderUseCases.execute({ table, products });

    return res.status(201).json(order);
  }

}

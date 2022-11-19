import { Request, Response } from 'express';
import { ListOrdersUseCases } from './ListOrdersUseCases';
export class ListOrdersController {

  constructor(
    private listOrdersUseCases: ListOrdersUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const orders = await this.listOrdersUseCases.execute();

    return res.json(orders);
  }

}

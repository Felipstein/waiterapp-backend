import { Request, Response } from 'express';
import { DeleteOrderUseCases } from './DeleteOrderUseCases';

export class DeleteORderController {

  constructor(
    private deleteOrderUseCases: DeleteOrderUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;

    await this.deleteOrderUseCases.execute(orderId);

    return res.sendStatus(204);
  }

}

import { Request, Response } from 'express';
import { ChangeOrderStatusUseCases } from './ChangeOrderStatusUseCases';
export class ChangeOrderStatusController {

  constructor(
    private changeOrderStatusUseCases: ChangeOrderStatusUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;
    const { status } = req.body;

    await this.changeOrderStatusUseCases.execute({ orderId, status });

    return res.sendStatus(204);
  }

}

import { Router } from 'express';
import { listOrdersFactory } from '../modules/orders/listOrders';
import { changeOrderStatus } from '../useCases/orders/changeOrderStatus';
import { createOrder } from '../useCases/orders/createOrder';
import { deleteOrder } from '../useCases/orders/deleteOrder';

const route = Router();

route.get('/', (req, res) => {
  return listOrdersFactory().controller.handle(req, res);
});

route.post('/', createOrder);

route.patch('/:orderId', changeOrderStatus);

route.delete('/:orderId', deleteOrder);

export { route as orderRoutes };

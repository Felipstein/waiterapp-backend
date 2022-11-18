import { Router } from 'express';
import { createOrderFactory } from '../modules/orders/createOrder';
import { listOrdersFactory } from '../modules/orders/listOrders';
import { changeOrderStatus } from '../useCases/orders/changeOrderStatus';
import { deleteOrder } from '../useCases/orders/deleteOrder';

const route = Router();

route.get('/', (req, res) => {
  return listOrdersFactory().controller.handle(req, res);
});

route.post('/', (req, res) => {
  return createOrderFactory().controller.handle(req, res);
});

route.patch('/:orderId', changeOrderStatus);

route.delete('/:orderId', deleteOrder);

export { route as orderRoutes };

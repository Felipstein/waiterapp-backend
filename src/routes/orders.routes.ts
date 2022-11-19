import { Router } from 'express';
import { changeOrderStatusFactory } from '../modules/orders/changeOrderStatus';
import { createOrderFactory } from '../modules/orders/createOrder';
import { deleteOrderFactory } from '../modules/orders/deleteOrder';
import { listOrdersFactory } from '../modules/orders/listOrders';
import { deleteOrder } from '../useCases/orders/deleteOrder';

const route = Router();

route.get('/', (req, res) => {
  return listOrdersFactory().controller.handle(req, res);
});

route.post('/', (req, res) => {
  return createOrderFactory().controller.handle(req, res);
});

route.patch('/:orderId', (req, res) => {
  return changeOrderStatusFactory().controller.handle(req, res);
});

route.delete('/:orderId', (req, res) => {
  return deleteOrderFactory().controller.handle(req, res);
});

export { route as orderRoutes };

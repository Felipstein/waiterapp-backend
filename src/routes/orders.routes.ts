import { Router } from 'express';
import { changeOrderStatusFactory } from '../modules/Orders/changeOrderStatus';
import { createOrderFactory } from '../modules/Orders/createOrder';
import { deleteOrderFactory } from '../modules/Orders/deleteOrder';
import { listOrdersFactory } from '../modules/Orders/listOrders';

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

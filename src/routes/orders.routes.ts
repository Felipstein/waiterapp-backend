import { Router } from 'express';
import { changeOrderStatus } from '../useCases/orders/changeOrderStatus';
import { createOrder } from '../useCases/orders/createOrder';
import { deleteOrder } from '../useCases/orders/deleteOrder';
import { listOrders } from '../useCases/orders/listOrders';

const route = Router();

route.get('/', listOrders);

route.post('/', createOrder);

route.patch('/:orderId', changeOrderStatus);

route.delete('/:orderId', deleteOrder);

export { route as orderRoutes };

import { Router } from 'express';
import { createOrder } from '../useCases/orders/createOrder';
import { listOrders } from '../useCases/orders/listOrders';

const route = Router();

route.get('/', listOrders);

route.post('/', createOrder);

route.patch('/:orderId', (req, res) => {
  res.send('Updating status order by id');
});

route.delete('/:orderId', (req, res) => {
  res.send('Deleting order by id');
});

export { route as orderRoutes };

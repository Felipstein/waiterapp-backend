import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
  res.send('Getting orders');
});

route.post('/', (req, res) => {
  res.send('Creating order');
});

route.patch('/:orderId', (req, res) => {
  res.send('Updating status order by id');
});

route.delete('/:orderId', (req, res) => {
  res.send('Deleting order by id');
});

export { route as orderRoutes };

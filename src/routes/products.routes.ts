import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
  res.send('Getting products');
});

export { route as productRoutes };

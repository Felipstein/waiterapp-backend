import express from 'express';
import 'dotenv/config';
import 'express-async-errors';

import { routes } from './routes/routes';
import { errorHandlers } from './middlewares/errorsHandler';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandlers);

export { app };

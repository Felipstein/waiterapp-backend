import express from 'express';
import path from 'path';
import 'dotenv/config';
import 'express-async-errors';

import { routes } from './routes/routes';
import { errorHandlers } from './middlewares/errorsHandler';

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use(errorHandlers);

export { app };

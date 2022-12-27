import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import 'dotenv/config';
import 'express-async-errors';

import { routes } from './routes/routes';
import { errorHandlers } from './middlewares/errorsHandler';
import { verifyS3Credentials } from './middlewares/verifyS3Credentials';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connect', () => {
  console.log('Client connected');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.WEB_URI!);
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(verifyS3Credentials);

app.use(routes);

app.use(errorHandlers);

export { app, server, io };

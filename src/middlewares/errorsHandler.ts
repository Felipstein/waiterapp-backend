import { NextFunction, Request, Response } from 'express';
import { ImageDeleteError } from '../errors/ImageDeleteError';

import { APIError } from './../errors/APIError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandlers(err: Error, req: Request, res: Response, next: NextFunction) {

  if (err instanceof APIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log('#### ERROR HANDLER ####');
  if (err.stack) {
    console.error(err.stack);
  } else {
    console.error(`${err.name}: ${err.message}`);
  }

  return res.status(500).json({ message: 'Internal server error' });
}

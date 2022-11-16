import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandlers(err: Error, req: Request, res: Response, next: NextFunction) {

  return res.status(500).json({ message: 'Internal server error' });
}

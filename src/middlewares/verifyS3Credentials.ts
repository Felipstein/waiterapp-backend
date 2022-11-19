import { NextFunction, Request, Response } from 'express';
import EnvProvider from '../utils/EnvProvider';

export function verifyS3Credentials(req: Request, res: Response, next: NextFunction) {
  const { storageType, aws: { bucketName, accessKeyId, secretAccessKey, region } } = EnvProvider;

  if (storageType === 's3') {

    if ([bucketName, accessKeyId, secretAccessKey, region].some(value => !value)) {
      throw new Error('Fatal error: credentials for cloud image storage have not been set');
    }
  }

  next();
}

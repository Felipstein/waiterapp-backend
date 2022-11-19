import { S3Client } from '@aws-sdk/client-s3';
import EnvProvider from '../utils/EnvProvider';

export const s3Client = new S3Client({
  region: EnvProvider.aws.region,
  credentials: {
    accessKeyId: EnvProvider.aws.accessKeyId,
    secretAccessKey: EnvProvider.aws.secretAccessKey,
  },
});

export interface IDotEnv {
  host: string;
  port: number;
  dbURI: string;
  storageType: 'local' | 's3';
  aws: {
    bucketName: string;
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  };
}

export default {
  host: process.env.HOST_APP,
  port: process.env.PORT || 3333,
  dbURI: process.env.DB_CONNECT,
  storageType: process.env.STORAGE_TYPE || 'local',
  aws: {
    bucketName: process.env.AWS_BUCKET_NAME,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION,
  },
} as IDotEnv;

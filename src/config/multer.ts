import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import EnvProvider from '../utils/EnvProvider';
import { s3Client } from '../libs/s3Client';

const storageType = {
  local: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },

    filename(req, file, callback) {
      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    },
  }),

  s3: multerS3({
    s3: s3Client,
    bucket: EnvProvider.aws.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key(req, file, callback) {
      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),

  storage: storageType[EnvProvider.storageType],

  limits: {
    files: 1,
  },

  fileFilter(req, file, callback) {
    const mimeType = /image\/.+/;

    if (mimeType.test(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('O arquivo não é uma imagem.'));
    }
  },
} as multer.Options;

import multer from 'multer';
import path from 'path';

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
};

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),

  storage: storageType.local,

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

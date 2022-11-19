/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidObjectId } from 'mongoose';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { s3Client } from './../libs/s3Client';
import { ImageDeleteError } from '../errors/ImageDeleteError';
import { IProductsRepository } from '../repositories/IProductsRepository';
import EnvProvider from './EnvProvider';

export class DeleteImage {

  constructor(
    private productsRepository: IProductsRepository,
  ) { }

  private async notSafeExecute(productId: string) {
    if (!isValidObjectId(productId)) {
      throw new ImageDeleteError('invalid ID document/product');
    }

    const product = await this.productsRepository.listById(productId);
    if (!product) {
      throw new ImageDeleteError('document/product not found in collection/table');
    }

    if (EnvProvider.storageType === 'local') {
      await this.deleteLocalImage(product.imagePath);
    } else {
      this.deleteS3Image(product.imagePath);
    }
  }

  async execute(productId: string) {
    try {

      await this.notSafeExecute(productId);

    } catch (err: Error | ImageDeleteError | any) {
      if (err instanceof ImageDeleteError) {
        console.warn(err.message);
        return;
      }

      throw err;
    }
  }

  private async deleteLocalImage(imageName: string) {
    const image = path.resolve(__dirname, '..', '..', 'uploads', imageName);

    if (!fs.existsSync(image)) {
      throw new ImageDeleteError('image of document/product not exists');
    }

    const unlink = promisify(fs.unlink);
    await unlink(image);
  }

  private async deleteS3Image(imageName: string) {
    await s3Client.send(new DeleteObjectCommand({ Bucket: EnvProvider.aws.bucketName, Key: imageName }));
  }

}

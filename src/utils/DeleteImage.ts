/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidObjectId } from 'mongoose';
import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { ImageDeleteError } from '../errors/ImageDeleteError';
import { IProductsRepository } from '../repositories/IProductsRepository';
import EnvProvider from './EnvProvider';

export class DeleteImage {

  private readonly s3;

  constructor(
    private productsRepository: IProductsRepository,
  ) {
    this.s3 = new aws.S3();
  }

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

  private deleteS3Image(imageName: string) {
    console.log(imageName);

    this.s3.deleteObject({
      Bucket: EnvProvider.aws.bucketName,
      Key: imageName,
    });
  }

}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidObjectId } from 'mongoose';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { ImageDeleteError } from '../errors/ImageDeleteError';
import { IProductsRepository } from '../repositories/IProductsRepository';

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

    const image = path.resolve(__dirname, '..', '..', 'uploads', product.imagePath);

    if (!fs.existsSync(image)) {
      throw new ImageDeleteError('image of document/product not exists');
    }

    const unlink = promisify(fs.unlink);
    await unlink(image);
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

}

import { Types } from 'mongoose';

export interface CreateOrderProductsDTO {
  product: Types.ObjectId;
  quantity?: number;
}

export interface CreateOrderDTO {
  table: string;
  products: CreateOrderProductsDTO[];
}

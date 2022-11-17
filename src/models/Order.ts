import { model, Schema } from 'mongoose';

export interface IOrder {
  table: string;
  status?: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  createdAt?: Date;
  products: {
    product: Schema.Types.ObjectId;
    quantity?: number;
  }[];
}

export const Order = model<IOrder>('Order', new Schema<IOrder>({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
}));

import { model, Schema, Types } from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category: Types.ObjectId;
}

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    required: true,
    type: [{
      name: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    }],
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
}));

import { Schema, model } from 'mongoose';

export interface ICategory {
  name: string;
  icon: string;
}

export const Category = model<ICategory>('Category', new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}));

import { Types } from 'mongoose';

export interface CreateProductDTO {
  name: string;
  description: string;
  image?: Express.Multer.File & { key: string };
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category: Types.ObjectId;
}

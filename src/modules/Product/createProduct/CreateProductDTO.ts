import { Types } from 'mongoose';

export interface CreateProductDTO {
  name: string;
  description: string;
  image?: Express.Multer.File;
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category: Types.ObjectId;
}

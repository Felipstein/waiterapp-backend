import { Types } from 'mongoose';

export interface ChangeOrderStatusDTO {
  orderId: Types.ObjectId;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
}

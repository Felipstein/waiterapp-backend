export interface ChangeOrderStatusDTO {
  orderId: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
}

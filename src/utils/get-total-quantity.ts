import { TOrder } from '../common/types/order';

export const getTotalQuantity = (orders: TOrder[]) => {
  if(orders.length) {
    return orders.reduce((totalQuantity, order) => totalQuantity + order.quantity, 0);
  }
};

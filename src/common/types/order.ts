import { TCamera } from './camera';

export type TOrder = {
  camera: TCamera;
  quantity: number;
};

export type OrderData = Coupon & {
  camerasIds: number[];
};

export type Coupon = {
  coupon: null | string;
};

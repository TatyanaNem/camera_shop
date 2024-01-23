import { store } from '../../store';
import { RequestStatus } from '../const';
import { TCamera } from './camera';
import { TPromo } from './promo';
import { TReview } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TDataProcess = {
  promoSlides: TPromo[];
  products: TCamera[];
  activeProduct: null | TCamera;
  similarProducts: TCamera[];
  activeProductReviews: TReview[];
}

export type TAppProcess = {
  status: RequestStatus;
  error: null | string;
}

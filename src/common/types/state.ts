import { store } from '../../store';
import { ApiError, RequestStatus } from '../const';
import { TCamera } from './camera';
import { TPromo } from './promo';
import { TReview } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TDataProcess = {
  promoSlides: TPromo[];
  isPromoLoaded: boolean;
  products: TCamera[];
  activeProduct: null | TCamera;
  similarProducts: null | TCamera[];
  activeProductReviews: TReview[];
}

export type TAppProcess = {
  status: RequestStatus;
  error: null | ApiError;
  reviewSendStatus: RequestStatus;
}

import { store } from '../../store';
import { ApiError, CameraCategory, CameraLevel, CameraType, RequestStatus } from '../const';
import { TCamera } from './camera';
import { TUnavailableType } from './filter-types';
import { TOrder } from './order';
import { TPromo } from './promo';
import { TReview } from './review';
import { TSortOrder, TSortType } from './sort-types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TDataProcess = {
  promoSlides: TPromo[];
  isPromoLoaded: boolean;
  products: TCamera[];
  totalPagesCount: number;
  activeProduct: null | TCamera;
  similarProducts: null | TCamera[];
}

export type TAppProcess = {
  status: RequestStatus;
  error: null | ApiError;
}

export type TReviewProcess = {
  isReviewModalOpen: boolean;
  isSuccessModalOpen: boolean;
  reviews: TReview[];
  reviewSendingStatus: RequestStatus;
  reviewsFetchingStatus: RequestStatus;
  shouldReset: boolean;
}

export type TCartProcess = {
  isAddToCartModalOpen: boolean;
  product: null | TCamera;
  camerasInCart: TOrder[];
  productForRemove: null | TOrder;
  isSuccessModalOpen: boolean;
  isRemoveFromCartModalOpen: boolean;
  promoCode: string;
  promoCodeSendingStatus: RequestStatus;
  discount: null | number;
  orderSendingStatus: RequestStatus;
  isSendOrderSuccessModalOpen: boolean;
}

export type TSearchProcess = {
  searchProducts: TCamera[];
  searchProductsFetchingStatus: RequestStatus;
}

export type TSortProcess = {
  currentSortOrder: TSortOrder;
  currentSortType: TSortType;
}

export type TFilterProcess = {
  minPrice: string;
  maxPrice: string;
  category: CameraCategory | null;
  unavailableType: TUnavailableType[];
  cameraType: CameraType[];
  levels: CameraLevel[];
}

import { store } from '../../store';
import { TCamera } from './camera';
import { TPromo } from './promo';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TDataProcess = {
  promoSlides: TPromo[];
  products: TCamera[];
}

import { store } from '../../store';
import { TPromo } from './promo';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TDataProcess = {
  promoSlides: TPromo[];
}

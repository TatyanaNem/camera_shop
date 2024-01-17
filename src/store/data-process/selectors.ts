import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectPromoSides = (state: State) => state[NameSpace.DataProcess].promoSlides;

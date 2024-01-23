import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectPromoSides = (state: State) => state[NameSpace.DataProcess].promoSlides;
export const selectProducts = (state: State) => state[NameSpace.DataProcess].products;
export const selectActiveProduct = (state: State) => state[NameSpace.DataProcess].activeProduct;
export const selectSimilarProducts = (state: State) => state[NameSpace.DataProcess].similarProducts;

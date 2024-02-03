import { NameSpace } from '../../common/const';
import { TCamera } from '../../common/types/camera';
import { TPromo } from '../../common/types/promo';
import { TReview } from '../../common/types/review';
import { State } from '../../common/types/state';

export const selectPromoSides = (state: Pick<State, NameSpace.DataProcess>): TPromo[] => state[NameSpace.DataProcess].promoSlides;
export const selectIsPromoLoaded = (state: Pick<State, NameSpace.DataProcess>): boolean => state[NameSpace.DataProcess].isPromoLoaded;
export const selectProducts = (state: Pick<State, NameSpace.DataProcess>): TCamera[] => state[NameSpace.DataProcess].products;
export const selectActiveProduct = (state: Pick<State, NameSpace.DataProcess>):TCamera | null => state[NameSpace.DataProcess].activeProduct;
export const selectActiveProductId = (state: Pick<State, NameSpace.DataProcess>): number | undefined => state[NameSpace.DataProcess].activeProduct?.id;
export const selectSimilarProducts = (state: Pick<State, NameSpace.DataProcess>): TCamera[] | null => state[NameSpace.DataProcess].similarProducts;
export const selectActiveProductReviews = (state: Pick<State, NameSpace.DataProcess>): TReview[] => state[NameSpace.DataProcess].activeProductReviews;

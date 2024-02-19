import { NameSpace } from '../../common/const';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { mockProducts } from '../../mocks/mock-products';
import { mockPromoSlide } from '../../mocks/mock-promo-slide';
import { mockReview } from '../../mocks/mock-review';
import { selectActiveProduct, selectProducts, selectPromoSides, selectSimilarProducts } from './selectors';

describe('DataProcess selectors', () => {
  const state = {
    [NameSpace.DataProcess]: {
      promoSlides: [mockPromoSlide, mockPromoSlide],
      isPromoLoaded: true,
      products: mockProducts,
      totalPagesCount: 1,
      activeProduct: mockActiveProduct,
      similarProducts: mockProducts,
      activeProductReviews: [mockReview, mockReview, mockReview]
    }
  };

  it('should return correct data', () => {
    const promoSlides = selectPromoSides(state);
    const products = selectProducts(state);
    const activeProduct = selectActiveProduct(state);
    const similarProducts = selectSimilarProducts(state);

    expect(promoSlides.length).toBe(2);
    expect(products.length).toBe(3);
    expect(activeProduct).toEqual(state[NameSpace.DataProcess].activeProduct);
    expect(similarProducts).toEqual(state[NameSpace.DataProcess].similarProducts);
  });
});

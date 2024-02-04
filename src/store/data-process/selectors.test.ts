import { NameSpace } from '../../common/const';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { mockProducts } from '../../mocks/mock-products';
import { mockPromoSlide } from '../../mocks/mock-promo-slide';
import { mockReview } from '../../mocks/mock-review';
import { selectActiveProduct, selectActiveProductReviews, selectProducts, selectPromoSides, selectSimilarProducts } from './selectors';

describe('DataProcess selectors', () => {
  const state = {
    [NameSpace.DataProcess]: {
      promoSlides: [mockPromoSlide, mockPromoSlide],
      isPromoLoaded: true,
      products: mockProducts,
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
    const reviews = selectActiveProductReviews(state);

    expect(promoSlides.length).toBe(2);
    expect(products.length).toBe(3);
    expect(activeProduct).toEqual(state[NameSpace.DataProcess].activeProduct);
    expect(similarProducts).toEqual(state[NameSpace.DataProcess].similarProducts);
    expect(reviews.length).toBe(3);
  });
});

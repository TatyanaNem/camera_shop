import { TDataProcess } from '../../common/types/state';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { mockProducts } from '../../mocks/mock-products';
import { mockPromoSlide } from '../../mocks/mock-promo-slide';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchSimilarProducts } from '../api-actions';
import { dataProcessReducer } from './data-process';

describe('test of data-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TDataProcess = {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      activeProduct: null,
      similarProducts: null,
    };

    expect(dataProcessReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with new promo slides', () => {
    const prevState: Partial<TDataProcess> = {
      promoSlides: [],
      isPromoLoaded: false
    };
    const updatedState: Partial<TDataProcess> = {
      promoSlides: [mockPromoSlide, mockPromoSlide, mockPromoSlide],
      isPromoLoaded: true
    };

    expect(dataProcessReducer(prevState as TDataProcess,
      {type: fetchPromoSlides.fulfilled.type, payload: [mockPromoSlide, mockPromoSlide, mockPromoSlide]}))
      .toEqual(updatedState);
    expect(updatedState.promoSlides?.length).toBe(3);
  });

  it('should update state with new product list', () => {
    const prevState: Partial<TDataProcess> = {
      products: [],
    };
    const updatedState: Partial<TDataProcess> = {
      products: mockProducts,
    };

    expect(dataProcessReducer(prevState as TDataProcess,
      {type: fetchProducts.fulfilled.type, payload: mockProducts}))
      .toEqual(updatedState);
  });

  it('should update state with new active product', () => {
    const prevState: Partial<TDataProcess> = {
      activeProduct: null,
    };
    const updatedState: Partial<TDataProcess> = {
      activeProduct: mockActiveProduct,
    };
    expect(dataProcessReducer(prevState as TDataProcess,
      {type: fetchActiveProduct.fulfilled.type, payload: mockActiveProduct}))
      .toEqual(updatedState);
  });

  it('should update state with new similar products', () => {
    const prevState: Partial<TDataProcess> = {
      similarProducts: null,
    };
    const updatedState: Partial<TDataProcess> = {
      similarProducts: mockProducts,
    };
    expect(dataProcessReducer(prevState as TDataProcess,
      {type: fetchSimilarProducts.fulfilled.type, payload: mockProducts}))
      .toEqual(updatedState);
    expect(updatedState.similarProducts?.length).toBe(3);
  });
});

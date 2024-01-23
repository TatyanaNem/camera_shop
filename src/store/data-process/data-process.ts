import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchReviews, fetchSimilarProducts } from '../api-actions';
import { TDataProcess } from '../../common/types/state';

const initialState: TDataProcess = {
  promoSlides: [],
  products: [],
  activeProduct: null,
  similarProducts: [],
  activeProductReviews: []
};

export const dataProcess = createSlice({
  name: NameSpace.DataProcess,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromoSlides.fulfilled, (state, action) => {
        state.promoSlides = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchActiveProduct.fulfilled, (state, action) => {
        state.activeProduct = action.payload;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.activeProductReviews = action.payload;
      });
  }
});

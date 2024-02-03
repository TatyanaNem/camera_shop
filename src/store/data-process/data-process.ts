import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchReviews, fetchSimilarProducts, postReview } from '../api-actions';
import { TDataProcess } from '../../common/types/state';

const initialState: TDataProcess = {
  promoSlides: [],
  isPromoLoaded: false,
  products: [],
  activeProduct: null,
  similarProducts: null,
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
        state.isPromoLoaded = true;
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
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.activeProductReviews = [...state.activeProductReviews, action.payload];
      });
  }
});

export const { reducer: dataProcessReducer } = dataProcess;

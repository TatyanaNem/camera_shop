import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchSimilarProducts } from '../api-actions';
import { TDataProcess } from '../../common/types/state';

const initialState: TDataProcess = {
  promoSlides: [],
  isPromoLoaded: false,
  products: [],
  activeProduct: null,
  similarProducts: null,
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
      });
  }
});

export const { reducer: dataProcessReducer } = dataProcess;

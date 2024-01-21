import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides } from '../api-actions';
import { TDataProcess } from '../../common/types/state';

const initialState: TDataProcess = {
  promoSlides: [],
  products: [],
  activeProduct: null,
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
      });
  }
});

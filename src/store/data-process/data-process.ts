import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { fetchActiveProduct, fetchAverageRating, fetchProducts, fetchPromoSlides, fetchSimilarProducts } from '../api-actions';
import { TDataProcess } from '../../common/types/state';

const initialState: TDataProcess = {
  promoSlides: [],
  isPromoLoaded: false,
  products: [],
  totalPagesCount: 0,
  activeProduct: null,
  similarProducts: null,
};

export const dataProcess = createSlice({
  name: NameSpace.DataProcess,
  initialState,
  reducers: {
    setTotalPagesCount: (state, action: PayloadAction<number>) => {
      state.totalPagesCount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromoSlides.fulfilled, (state, action) => {
        state.promoSlides = action.payload;
        state.isPromoLoaded = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPagesCount = action.payload.totalPagesCount;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.totalPagesCount = 0;
        state.products = [];
      })
      .addCase(fetchActiveProduct.fulfilled, (state, action) => {
        state.activeProduct = action.payload;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
      })
      .addCase(fetchAverageRating.fulfilled, (state, action) => {
        const camera = state.products.find((item) => item.id === action.payload.id);
        if (camera) {
          camera.rating = action.payload.rating;
        }
      });
  }
});

export const { reducer: dataProcessReducer } = dataProcess;

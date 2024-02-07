import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../common/const';
import { TAppProcess } from '../../common/types/state';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchReviews, fetchSimilarProducts, postReview } from '../api-actions';

const initialState: TAppProcess = {
  status: RequestStatus.Idle,
  error: null
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchProducts.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(fetchPromoSlides.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchPromoSlides.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(fetchPromoSlides.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(fetchActiveProduct.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchActiveProduct.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(fetchActiveProduct.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(postReview.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
      });
  }
});

export const appProcessReducer = appProcess.reducer;

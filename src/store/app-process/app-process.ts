import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  reducers: {
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatus }>) => {
      state.status = action.payload.status;
    },
  },
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
      .addCase(fetchReviews.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(postReview.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.status = RequestStatus.Failed;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  }
});

export const {setAppStatus} = appProcess.actions;
export const appProcessReducer = appProcess.reducer;

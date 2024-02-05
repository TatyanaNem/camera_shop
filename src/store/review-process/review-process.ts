import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../common/const';
import { TReviewProcess } from '../../common/types/state';
import { fetchReviews, postReview } from '../api-actions';

const initialState: TReviewProcess = {
  isSuccessModalOpen: false,
  isReviewModalOpen: false,
  reviews: [],
  reviewsFetchingStatus: RequestStatus.Idle,
  reviewSendingStatus: RequestStatus.Idle,
  shouldReset: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.ReviewProcess,
  initialState,
  reducers: {
    openModalReview: (state) => {
      state.isReviewModalOpen = true;
    },
    closeModalReview: (state) => {
      state.isReviewModalOpen = false;
    },
    openSuccessModal: (state) => {
      state.isSuccessModalOpen = true;
    },
    closeSuccessModal: (state) => {
      state.isSuccessModalOpen = false;
    },
    resetModal: (state) => {
      state.shouldReset = true;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviewsFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewsFetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsFetchingStatus = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.reviewSendingStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviewSendingStatus = RequestStatus.Success;
        state.reviews = [...state.reviews, action.payload];
      })
      .addCase(postReview.rejected, (state) => {
        state.reviewSendingStatus = RequestStatus.Failed;
      });
  }
});

export const {openModalReview, closeModalReview, openSuccessModal, closeSuccessModal, resetModal} = reviewProcess.actions;

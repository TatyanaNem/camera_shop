import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../common/const';
import { TSearchProcess } from '../../common/types/state';
import { fetchProductsWithSearchValue } from '../api-actions';

const initialState: TSearchProcess = {
  searchProducts: [],
  searchProductsFetchingStatus: RequestStatus.Idle
};

export const searchProcess = createSlice({
  name: NameSpace.SearchProcess,
  initialState,
  reducers: {
    resetSearchProducts: (state) => {
      state.searchProducts = [];
    },
    resetSearchFetchingStatus: (state) => {
      state.searchProductsFetchingStatus = RequestStatus.Idle;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchProductsWithSearchValue.pending, (state) => {
        state.searchProductsFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchProductsWithSearchValue.fulfilled, (state, action) => {
        state.searchProductsFetchingStatus = RequestStatus.Success;
        state.searchProducts = action.payload;
      })
      .addCase(fetchProductsWithSearchValue.rejected, (state) => {
        state.searchProductsFetchingStatus = RequestStatus.Failed;
      });
  }
});

export const {resetSearchProducts, resetSearchFetchingStatus} = searchProcess.actions;

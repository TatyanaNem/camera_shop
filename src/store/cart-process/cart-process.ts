import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { TCartProcess } from '../../common/types/state';
import { TCamera } from '../../common/types/camera';

const initialState: TCartProcess = {
  isAddToCartModalOpen: false,
  product: null,
  camerasInCart: [],
  isSuccessModalOpen: false
};

export const cartProcess = createSlice({
  name: NameSpace.CartProcess,
  initialState,
  reducers: {
    openAddToCartModal: (state, action: PayloadAction<TCamera>) => {
      state.isAddToCartModalOpen = true;
      state.product = action.payload;
    },
    closeAddToCartModal: (state) => {
      state.isAddToCartModalOpen = false;
    },
    addToCart: (state, action: PayloadAction<TCamera>) => {
      state.camerasInCart = [...state.camerasInCart, action.payload];
      state.isAddToCartModalOpen = false;
      state.isSuccessModalOpen = true;
    },
    openAddToCartModalSuccess: (state) => {
      state.isSuccessModalOpen = true;
    },
    closeAddToCartModalSuccess: (state) => {
      state.isSuccessModalOpen = false;
    }
  }
});

export const {openAddToCartModal, closeAddToCartModal, addToCart, openAddToCartModalSuccess, closeAddToCartModalSuccess} = cartProcess.actions;

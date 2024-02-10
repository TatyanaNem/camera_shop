import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { TCartProcess } from '../../common/types/state';
import { TCamera } from '../../common/types/camera';

const initialState: TCartProcess = {
  isAddToCartModalOpen: false,
  product: null
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
    }
  }
});

export const {openAddToCartModal, closeAddToCartModal} = cartProcess.actions;

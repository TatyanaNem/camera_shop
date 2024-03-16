import { TOrder } from './../../common/types/order';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { TCartProcess } from '../../common/types/state';
import { TCamera } from '../../common/types/camera';

const initialState: TCartProcess = {
  isAddToCartModalOpen: false,
  product: null,
  productForRemove: null,
  camerasInCart: [],
  isSuccessModalOpen: false,
  isRemoveFromCartModalOpen: false
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
      const order = state.camerasInCart.find((item) => item.camera.id === action.payload.id);
      if (order) {
        order.quantity += 1;
      } else {
        const newOrder = {
          camera: action.payload,
          quantity: 1
        };
        state.camerasInCart.push(newOrder);
      }
      state.isAddToCartModalOpen = false;
      state.isSuccessModalOpen = true;
    },
    selectProductForRemove: (state, action: PayloadAction<TOrder>) => {
      state.productForRemove = action.payload;
      state.isRemoveFromCartModalOpen = true;
    },
    closeRemoveFromCartModal: (state) => {
      state.isRemoveFromCartModalOpen = false;
    },
    removeFromCart: (state) => {
      const newCamerasInCartList = state.camerasInCart.filter((item) => item.camera.id !== state.productForRemove?.camera.id);
      state.camerasInCart = newCamerasInCartList;
      state.isRemoveFromCartModalOpen = false;
    },
    changeQuantity: (state, action: PayloadAction<TOrder>) => {
      const order = state.camerasInCart.find((item) => item.camera.id === action.payload.camera.id);
      if (order) {
        order.quantity = action.payload.quantity;
      }
    },
    openAddToCartModalSuccess: (state) => {
      state.isSuccessModalOpen = true;
    },
    closeAddToCartModalSuccess: (state) => {
      state.isSuccessModalOpen = false;
    }
  }
});

export const {
  openAddToCartModal,
  closeAddToCartModal,
  addToCart,
  selectProductForRemove,
  removeFromCart,
  closeRemoveFromCartModal,
  openAddToCartModalSuccess,
  closeAddToCartModalSuccess,
  changeQuantity
} = cartProcess.actions;

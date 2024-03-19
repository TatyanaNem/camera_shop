import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { rootReducer } from './rootReducer';
import { loadCartState, saveCartState } from '../utils/local-storage';
import { NameSpace } from '../common/const';
import { debounce } from 'ts-debounce';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
  preloadedState: {[NameSpace.CartProcess]: loadCartState()}
});

const debouncedSave = debounce(() => {
  const state = store.getState();
  saveCartState(state.CART_PROCESS);
}, 1000);

store.subscribe(() => {
  debouncedSave();
});

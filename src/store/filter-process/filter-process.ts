import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../common/const';
import { TFilterProcess } from '../../common/types/state';

const initialState: TFilterProcess = {
  minPrice: '',
  maxPrice: ''
};

export const filterProcess = createSlice({
  name: NameSpace.FilterProcess,
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<string>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<string>) => {
      state.maxPrice = action.payload;
    }
  }
});

export const {setMinPrice, setMaxPrice} = filterProcess.actions;

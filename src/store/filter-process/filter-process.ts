import { TUnavailableType } from './../../common/types/filter-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CameraCategory, NameSpace } from '../../common/const';
import { TFilterProcess } from '../../common/types/state';

const initialState: TFilterProcess = {
  minPrice: '',
  maxPrice: '',
  category: null,
  unavailableType:[]
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
    },
    setCategory: (state, action: PayloadAction<CameraCategory>) => {
      state.category = action.payload;
    },
    removeCategory: (state) => {
      state.category = null;
    },
    addUnavailableTypes: (state, action: PayloadAction<TUnavailableType[]>) => {
      state.unavailableType = action.payload;
    },
    removeUnavailableTypes: (state) => {
      state.unavailableType = [];
    }
  }
});

export const {setMinPrice, setMaxPrice, setCategory, removeCategory,addUnavailableTypes, removeUnavailableTypes} = filterProcess.actions;

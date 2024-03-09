import { TUnavailableType } from './../../common/types/filter-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CameraCategory, CameraLevel, CameraType, NameSpace } from '../../common/const';
import { TFilterProcess } from '../../common/types/state';

const initialState: TFilterProcess = {
  minPrice: '',
  maxPrice: '',
  minCatalogPrice: '',
  maxCatalogPrice: '',
  category: null,
  unavailableType:[],
  cameraType: [],
  levels: []
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
    },
    addCameraType: (state, action: PayloadAction<CameraType>) => {
      if (!state.cameraType.includes(action.payload)) {
        state.cameraType.push(action.payload);
      }
    },
    removeCameraType: (state, action: PayloadAction<CameraType>) => {
      state.cameraType = state.cameraType.filter((cameraType) => cameraType !== action.payload);
    },
    addCameraLevel: (state, action: PayloadAction<CameraLevel>) => {
      if (!state.levels.includes(action.payload)) {
        state.levels.push(action.payload);
      }
    },
    removeCameraLevel: (state, action: PayloadAction<CameraLevel>) => {
      state.levels = state.levels.filter((level) => level !== action.payload);
    },
    resetFilters: (state) => {
      state.minPrice = '';
      state.maxPrice = '';
      state.category = null;
      state.unavailableType = [];
      state.levels = [];
      state.cameraType = [];
    }
  }
});

export const {
  setMinPrice,
  setMaxPrice,
  setCategory,
  removeCategory,
  addUnavailableTypes,
  removeUnavailableTypes,
  addCameraType,
  removeCameraType,
  addCameraLevel,
  removeCameraLevel,
  resetFilters
} = filterProcess.actions;

export const filterProcessReducer = filterProcess.reducer;

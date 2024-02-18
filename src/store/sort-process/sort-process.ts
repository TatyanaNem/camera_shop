import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SORT_TYPE, NameSpace } from '../../common/const';
import { TSortProcess } from '../../common/types/state';
import { TSortOrder, TSortType } from '../../common/types/sort-types';

const initialState: TSortProcess = {
  currentSortType: '',
  currentSortOrder: ''
};

export const sortProcess = createSlice({
  name: NameSpace.SortProcess,
  initialState,
  reducers: {
    setCurrentSortType: (state, action: PayloadAction<TSortType>) => {
      state.currentSortType = action.payload;
    },
    setCurrentOrderType: (state, action: PayloadAction<TSortOrder>) => {
      state.currentSortOrder = action.payload;
      if (state.currentSortOrder && state.currentSortType === '') {
        state.currentSortType = DEFAULT_SORT_TYPE;
      }
    }
  },
});

export const {setCurrentSortType, setCurrentOrderType} = sortProcess.actions;

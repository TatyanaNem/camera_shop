import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../common/const';
import { dataProcess } from './data-process/data-process';
import { appProcess } from './app-process/app-process';
import { reviewProcess } from './review-process/review-process';
import { cartProcess } from './cart-process/cart-process';
import { searchProcess } from './search-process/search-process';
import { sortProcess } from './sort-process/sort-process';
import { filterProcess } from './filter-process/filter-process';

export const rootReducer = combineReducers({
  [NameSpace.DataProcess]: dataProcess.reducer,
  [NameSpace.AppProcess]: appProcess.reducer,
  [NameSpace.ReviewProcess]: reviewProcess.reducer,
  [NameSpace.CartProcess]: cartProcess.reducer,
  [NameSpace.SearchProcess]: searchProcess.reducer,
  [NameSpace.SortProcess]: sortProcess.reducer,
  [NameSpace.FilterProcess]: filterProcess.reducer
});

import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../common/const';
import { dataProcess } from './data-process/data-process';
import { appProcess } from './app-process/app-process';
import { reviewProcess } from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpace.DataProcess]: dataProcess.reducer,
  [NameSpace.AppProcess]: appProcess.reducer,
  [NameSpace.ReviewProcess]: reviewProcess.reducer
});

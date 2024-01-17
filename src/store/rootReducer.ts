import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../common/const';
import { dataProcess } from './data-process/data-process';

export const rootReducer = combineReducers({
  [NameSpace.DataProcess]: dataProcess.reducer,
});

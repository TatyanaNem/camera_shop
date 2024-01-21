import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../common/const';
import { TAppProcess } from '../../common/types/state';

const initialState: TAppProcess = {
  status: RequestStatus.Idle,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatus }>) => {
      state.status = action.payload.status;
    },
  }
});

export const {setAppStatus, setAppError} = appProcess.actions;
export const appReducer = appProcess.reducer;

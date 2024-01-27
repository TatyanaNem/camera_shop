import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { setAppError, setAppStatus } from '../store/app-process/app-process';
import { RequestStatus } from '../common/const';

export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>;
  if (axios.isAxiosError(err)) {
    const error = err.message ? err.message : 'Упс! Что-то пошло не так...';
    dispatch(setAppError({ error }));
  } else {
    dispatch(setAppError({ error: `Native error ${err.message}` }));
  }
  dispatch(setAppStatus({ status: RequestStatus.Failed }));
};

export const handleServerAppError = (dispatch: Dispatch) => {
  dispatch(setAppError({ error: 'Упс! Что-то пошло не так...' }));
  dispatch(setAppStatus({ status: RequestStatus.Failed }));
};

import { TCamera } from './../common/types/camera';
import { AxiosInstance } from 'axios';
import { APIRoute, RequestStatus } from '../common/const';
import { TPromo } from '../common/types/promo';
import { AppDispatch, State } from '../common/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StatusCodes } from 'http-status-codes';
import { setAppError, setAppStatus } from './app-process/app-process';
import { TReview } from '../common/types/review';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchPromoSlides = createAsyncThunk<TPromo[], undefined, TExtra>(
  'dataProcess/fetchPromoSlides',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TPromo[]>(APIRoute.Promo);
      return data;
    } catch (error) {
      return rejectWithValue(null);
    }
  });

export const fetchProducts = createAsyncThunk<TCamera[], undefined, TExtra>(
  'dataProcess/fetchProducts',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<TCamera[]>(APIRoute.Cameras);
      return data;
    } catch (error) {
      return rejectWithValue(null);
    }
  });

export const fetchActiveProduct = createAsyncThunk<TCamera, TCamera['id'], TExtra>(
  'dataProcess/fetchActiveProduct',
  async (id, {extra: api, rejectWithValue, dispatch}) => {
    try {
      dispatch(setAppStatus({status: RequestStatus.Loading}));
      const response = await api.get<TCamera>(`${APIRoute.Cameras}/${id}`);
      if (response.status === StatusCodes.OK) {
        dispatch(setAppStatus({status: RequestStatus.Success}));
      }
      return response.data;
    } catch (error) {
      dispatch(setAppError({error: 'Упс! Что-то пошло не так...'}));
      dispatch(setAppStatus({status: RequestStatus.Failed}));
      return rejectWithValue(null);
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk<TCamera[], TCamera['id'], TExtra>(
  'dataProcess/fetchSimilarProducts',
  async (id, {extra: api, rejectWithValue, dispatch}) => {
    try {
      dispatch(setAppStatus({status: RequestStatus.Loading}));
      const response = await api.get<TCamera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);
      if (response.status === StatusCodes.OK) {
        dispatch(setAppStatus({status: RequestStatus.Success}));
      }
      return response.data;
    } catch (error) {
      dispatch(setAppError({error: 'Упс! Что-то пошло не так...'}));
      dispatch(setAppStatus({status: RequestStatus.Failed}));
      return rejectWithValue(null);
    }
  }
);

export const fetchReviews = createAsyncThunk<TReview[], TCamera['id'], TExtra>(
  'dataProcess/fetchReviews',
  async (id, {extra: api, rejectWithValue, dispatch}) => {
    try {
      dispatch(setAppStatus({status: RequestStatus.Loading}));
      const response = await api.get<TReview[]>(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`);
      if (response.status === StatusCodes.OK) {
        dispatch(setAppStatus({status: RequestStatus.Success}));
      }
      return response.data;
    } catch (error) {
      dispatch(setAppError({error: 'Упс! Что-то пошло не так...'}));
      dispatch(setAppStatus({status: RequestStatus.Failed}));
      return rejectWithValue(null);
    }
  }
);

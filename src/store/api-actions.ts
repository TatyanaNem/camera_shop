import { TCamera } from './../common/types/camera';
import { AxiosInstance } from 'axios';
import { APIRoute, RequestStatus } from '../common/const';
import { TPromo } from '../common/types/promo';
import { AppDispatch, State } from '../common/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StatusCodes } from 'http-status-codes';
import { setAppError, setAppStatus } from './app-process/app-process';
import { TReview } from '../common/types/review';
import { TReviewData } from '../common/types/review-data';
import { handleServerAppError, handleServerNetworkError } from '../utils/errors';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchPromoSlides = createAsyncThunk<TPromo[], undefined, TExtra>(
  'dataProcess/fetchPromoSlides',
  async (_arg, {extra: api, rejectWithValue, dispatch}) => {
    try {
      const response = await api.get<TPromo[]>(APIRoute.Promo);
      if (response.status === StatusCodes.OK) {
        dispatch(setAppStatus({status: RequestStatus.Success}));
        return response.data;
      } else {
        handleServerAppError(dispatch);
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch);
      return rejectWithValue(null);
    }
  });

export const fetchProducts = createAsyncThunk<TCamera[], undefined, TExtra>(
  'dataProcess/fetchProducts',
  async (_arg, {extra: api, rejectWithValue, dispatch}) => {
    try {
      dispatch(setAppStatus({status: RequestStatus.Loading}));
      const response = await api.get<TCamera[]>(APIRoute.Cameras);
      if (response.status === StatusCodes.OK) {
        dispatch(setAppStatus({status: RequestStatus.Success}));
        return response.data;
      } else {
        handleServerAppError(dispatch);
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch);
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
        return response.data;
      } else {
        return rejectWithValue(null);
      }
    } catch (error) {
      dispatch(setAppStatus({status: RequestStatus.Failed}));
      dispatch(setAppError({error: 'Товар не найден...'}));
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
        return response.data;
      } else {
        handleServerAppError(dispatch);
        return rejectWithValue(null);
      }
    } catch (error) {
      dispatch(setAppError({error: 'Похожие товары не найдены...'}));
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
        return response.data;
      } else {
        handleServerAppError(dispatch);
        return rejectWithValue(null);
      }
    } catch (error) {
      dispatch(setAppError({error: 'Не удалось загрузить отзывы...'}));
      dispatch(setAppStatus({status: RequestStatus.Failed}));
      return rejectWithValue(null);
    }
  }
);

export const postReview = createAsyncThunk<TReview, TReviewData, TExtra>(
  'dataProcess/postReview',
  async (reviewData, {extra: api, rejectWithValue, dispatch}) => {
    try {
      const response = await api.post<TReview>(APIRoute.Reviews, reviewData);
      if (response.status === StatusCodes.CREATED) {
        return response.data;
      } else {
        dispatch(setAppError({error: 'Не удалось отправить отзыв...'}));
        return rejectWithValue(null);
      }
    } catch (error) {
      handleServerAppError(dispatch);
      return rejectWithValue(null);
    }
  }
);

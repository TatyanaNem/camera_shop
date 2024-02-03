import { TCamera } from './../common/types/camera';
import { AxiosInstance } from 'axios';
import { APIRoute, ApiError, NameSpace } from '../common/const';
import { TPromo } from '../common/types/promo';
import { AppDispatch, State } from '../common/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReview } from '../common/types/review';
import { TReviewData } from '../common/types/review-data';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ApiError;
}

export const fetchPromoSlides = createAsyncThunk<TPromo[], undefined, TExtra>(
  `${NameSpace.DataProcess}/fetchPromoSlides`,
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TPromo[]>(APIRoute.Promo);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchPromo);
    }
  });

export const fetchProducts = createAsyncThunk<TCamera[], undefined, TExtra>(
  `${NameSpace.DataProcess}/fetchProducts`,
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera[]>(APIRoute.Cameras);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchProducts);
    }
  });

export const fetchActiveProduct = createAsyncThunk<TCamera, TCamera['id'], TExtra>(
  `${NameSpace.DataProcess}/fetchActiveProduct`,
  async (id, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera>(`${APIRoute.Cameras}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchActiveProduct);
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk<TCamera[], TCamera['id'], TExtra>(
  `${NameSpace.DataProcess}/fetchSimilarProducts`,
  async (id, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchSimilar);
    }
  }
);

export const fetchReviews = createAsyncThunk<TReview[], TCamera['id'], TExtra>(
  `${NameSpace.DataProcess}/fetchReviews`,
  async (id, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TReview[]>(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchReviews);
    }
  }
);

export const postReview = createAsyncThunk<TReview, TReviewData, TExtra>(
  `${NameSpace.DataProcess}/postReview`,
  async (reviewData, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.post<TReview>(APIRoute.Reviews, reviewData);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnPostReview);
    }
  }
);

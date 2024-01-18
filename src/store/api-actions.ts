import { AxiosInstance } from 'axios';
import { APIRoute } from '../common/const';
import { TPromo } from '../common/types/promo';
import { AppDispatch, State } from '../common/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCamera } from '../common/types/camera';

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

import { TCamera } from './../common/types/camera';
import { AxiosInstance } from 'axios';
import { APIRoute, ApiError, NameSpace, PRODUCT_LIMIT_PER_PAGE } from '../common/const';
import { TPromo } from '../common/types/promo';
import { AppDispatch, State } from '../common/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReview } from '../common/types/review';
import { TPostReviewProps } from '../common/types/review-data';
import { OrderData } from '../common/types/order';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ApiError;
}

type FetchProductsReturnType = {
  products: TCamera[];
  totalPagesCount: number;
}

type FetchAverageRatingReturnType = {
  id: number;
  rating: number;
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

export const fetchProducts = createAsyncThunk<FetchProductsReturnType, {url: string}, TExtra>(
  `${NameSpace.DataProcess}/fetchProducts`,
  async ({url}, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera[]>(url);
      const maxCatalogCount = Number(response.headers['x-total-count']);
      const products = response.data;
      const totalPagesCount = products.length ? Math.ceil(maxCatalogCount / PRODUCT_LIMIT_PER_PAGE) : 0;
      return {products, totalPagesCount};
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchProducts);
    }
  });

export const fetchAllProducts = createAsyncThunk<TCamera[], undefined, TExtra>(
  `${NameSpace.DataProcess}/fetchProducts`,
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera[]>(APIRoute.Cameras);
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchProducts);
    }
  });

export const fetchProductsWithSearchValue = createAsyncThunk<TCamera[], string, TExtra>(
  `${NameSpace.DataProcess}/fetchProductsWithSearchValue`,
  async (value, {extra: api, rejectWithValue}) => {
    try {
      const response = await api.get<TCamera[]>(`${APIRoute.Cameras}?name_like=${value}`);
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

export const postReview = createAsyncThunk<TReview, TPostReviewProps, TExtra>(
  `${NameSpace.DataProcess}/postReview`,
  async (props, {extra: api, rejectWithValue}) => {
    const {reviewData, callWhenResolved} = props;
    try {
      const response = await api.post<TReview>(APIRoute.Reviews, reviewData);
      callWhenResolved();
      return response.data;
    } catch (error) {
      return rejectWithValue(ApiError.OnPostReview);
    }
  }
);

export const fetchPrice = createAsyncThunk<string, string, TExtra>(
  `${NameSpace.FilterProcess}/fetchPrice`,
  async (url, {extra: api}) => {
    const URL = `${url}&_start=0&_limit=1`;
    const {data} = await api.get<TCamera[]>(URL);
    return data[0].price.toString();
  }
);

export const fetchAverageRating = createAsyncThunk<FetchAverageRatingReturnType, number, TExtra>(
  'camera/fetchAvarageRatings',
  async (id, { extra: api, rejectWithValue}) => {
    try {
      const { data } = await api.get<TReview[]>(`${ APIRoute.Cameras }/${ id }${ APIRoute.Reviews}`);

      const rating = data.map((review) => review.rating);
      const averageRating = rating.reduce((total, raiting) => (total + raiting), 0) / rating.length;

      return {
        rating: Math.ceil(averageRating),
        id
      };
    } catch (error) {
      return rejectWithValue(ApiError.OnFetchReviews);
    }
  }
);

export const sendPromo = createAsyncThunk<number, string, TExtra>(
  `${NameSpace.CartProcess}/sendPromo`,
  async (promo, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<number>(APIRoute.Coupons, {coupon: promo});
      return data;
    } catch (error) {
      return rejectWithValue(ApiError.OnSendPromoCode);
    }
  }
);

export const sendOrder = createAsyncThunk<void, OrderData, TExtra>(
  `${NameSpace.CartProcess}/sendOrder`,
  async (userOrderData, {extra: api, rejectWithValue}) => {
    try {
      await api.post<OrderData>(APIRoute.Orders, userOrderData);
    } catch (error) {
      return rejectWithValue(ApiError.OnSendOrder);
    }
  }
);

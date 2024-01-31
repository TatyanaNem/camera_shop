import { ApiError, RequestStatus } from '../../common/const';
import { TAppProcess } from '../../common/types/state';
import { fetchActiveProduct, fetchProducts, fetchPromoSlides, fetchReviews, fetchSimilarProducts, postReview } from '../api-actions';
import { appProcessReducer } from './app-process';

describe('test of app-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TAppProcess = {
      status: RequestStatus.Idle,
      error: null
    };

    expect(appProcessReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with "loading" status while loading data', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Idle,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchProducts.pending.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchPromoSlides.pending.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchActiveProduct.pending.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchSimilarProducts.pending.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchReviews.pending.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: postReview.pending.type}))
      .toEqual(updatedState);
  });

  it('should update state with "success" status while request is resolved', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Success,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchProducts.fulfilled.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchPromoSlides.fulfilled.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchActiveProduct.fulfilled.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchSimilarProducts.fulfilled.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchReviews.fulfilled.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: postReview.fulfilled.type}))
      .toEqual(updatedState);
  });

  it('should update state with "failed" status while request is rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchProducts.rejected.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchPromoSlides.rejected.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchActiveProduct.rejected.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchSimilarProducts.rejected.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchReviews.rejected.type}))
      .toEqual(updatedState);
    expect(appProcessReducer(prevState as TAppProcess,
      {type: postReview.rejected.type}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on fetchProducts.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnFetchProducts,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchProducts.rejected.type, payload: ApiError.OnFetchProducts}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on fetchActiveProduct.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnFetchActiveProduct,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchActiveProduct.rejected.type, payload: ApiError.OnFetchActiveProduct}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on fetchPromoSlides.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnFetchPromo,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchPromoSlides.rejected.type, payload: ApiError.OnFetchPromo}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on fetchSimilarProducts.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnFetchSimilar,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchSimilarProducts.rejected.type, payload: ApiError.OnFetchSimilar}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on fetchReviews.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnFetchReviews,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: fetchReviews.rejected.type, payload: ApiError.OnFetchReviews}))
      .toEqual(updatedState);
  });

  it('should update state with expected error on postReview.rejected', () => {
    const prevState: Partial<TAppProcess> = {
      status: RequestStatus.Loading,
      error: null,
    };
    const updatedState: Partial<TAppProcess> = {
      status: RequestStatus.Failed,
      error: ApiError.OnPostReview,
    };

    expect(appProcessReducer(prevState as TAppProcess,
      {type: postReview.rejected.type, payload: ApiError.OnPostReview}))
      .toEqual(updatedState);
  });
});

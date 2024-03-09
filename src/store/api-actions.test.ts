import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../common/types/state';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { mockProducts } from '../mocks/mock-products';
import { APIRoute, BACKEND_URL } from '../common/const';
import { fetchActiveProduct, fetchPrice, fetchProducts, fetchPromoSlides, fetchReviews, fetchSimilarProducts, postReview } from './api-actions';
import { mockActiveProduct } from '../mocks/mock-active-product';
import { mockPromoSlide } from '../mocks/mock-promo-slide';
import { mockReview } from '../mocks/mock-review';
import { mockReviewData } from '../mocks/mock-review-data';
import { closeModalReview, openSuccessModal, resetModal } from './review-process/review-process';

describe('when async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator =
    configureMockStore<State, Action<string>, ThunkDispatch<State, ReturnType<typeof createApi>, Action>>(middleware);

  const extractActionTypes =
    (actions: Action<string>[]) => actions.map(({ type }) => type);

  describe('fetch products', () => {
    const url = 'https://camera-shop.accelerator.htmlacademy.pro/cameras?_start=0&_limit=9';

    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(url)
        .reply(200, mockProducts, {'x-total-count': 1});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchProducts({url}));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchProducts.pending.type,
          fetchProducts.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(url)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchProducts({url}));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchProducts.pending.type,
          fetchProducts.rejected.type
        ]);

    });
  });

  describe('fetch active product', () => {
    const id = 100;
    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}`)
        .reply(200, mockActiveProduct);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchActiveProduct(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchActiveProduct.pending.type,
          fetchActiveProduct.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}`)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchActiveProduct(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchActiveProduct.pending.type,
          fetchActiveProduct.rejected.type
        ]);
    });
  });

  describe('fetch promo slides', () => {
    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(APIRoute.Promo)
        .reply(200, mockPromoSlide);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchPromoSlides());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchPromoSlides.pending.type,
          fetchPromoSlides.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(APIRoute.Promo)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchPromoSlides());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchPromoSlides.pending.type,
          fetchPromoSlides.rejected.type
        ]);
    });
  });

  describe('fetch similar products', () => {
    const id = 100;
    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`)
        .reply(200, mockProducts);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchSimilarProducts(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchSimilarProducts.pending.type,
          fetchSimilarProducts.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchSimilarProducts(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchSimilarProducts.pending.type,
          fetchSimilarProducts.rejected.type
        ]);
    });
  });

  describe('fetch reviews', () => {
    const id = 100;
    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`)
        .reply(200, mockReview);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchReviews(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchReviews.pending.type,
          fetchReviews.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchReviews(id));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchReviews.pending.type,
          fetchReviews.rejected.type
        ]);
    });
  });

  describe('post new review', () => {
    it('should call actions with server 204 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onPost(APIRoute.Reviews)
        .reply(200, mockReview);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(postReview({
        reviewData: mockReviewData,
        callWhenResolved: () => {
          store.dispatch(resetModal());
          store.dispatch(closeModalReview());
          store.dispatch(openSuccessModal());
        },
      }));
      const actions = extractActionTypes(store.getActions());
      const postReviewFulfilled = (store.getActions()).at(-1) as ReturnType<typeof postReview.fulfilled>;

      expect(actions).toEqual(
        [
          postReview.pending.type,
          resetModal.type,
          closeModalReview.type,
          openSuccessModal.type,
          postReview.fulfilled.type,
        ]);

      expect(postReviewFulfilled.payload).toEqual(mockReview);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onPost(APIRoute.Reviews)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(postReview({
        reviewData: mockReviewData,
        callWhenResolved: () => {
          store.dispatch(resetModal());
          store.dispatch(closeModalReview());
          store.dispatch(openSuccessModal());
        },
      }));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          postReview.pending.type,
          postReview.rejected.type
        ]);
    });
  });

  describe('fetch price', () => {
    const URL = `${BACKEND_URL}/cameras?_order=desc&_sort=price&_start=0&_limit=1`;
    it('should call actions with server 200 response', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(URL)
        .reply(200, [mockActiveProduct]);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchPrice(`${BACKEND_URL}/cameras?_order=desc&_sort=price`));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchPrice.pending.type,
          fetchPrice.fulfilled.type
        ]);
    });

    it('should call actions while request is rejected', async () => {
      const store = mockStoreCreator();
      mockAxiosAdapter
        .onGet(URL)
        .reply(400);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchPrice('desc'));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual(
        [
          fetchPrice.pending.type,
          fetchPrice.rejected.type
        ]);

    });
  });
});

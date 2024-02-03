import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../common/types/state';
import MockAdapter from 'axios-mock-adapter';
import { createApi } from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import { Provider } from 'react-redux';

type TComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {}
): TComponentWithMockStore {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, ThunkDispatch<State, typeof axios, Action>>(middleware);
  const mockStore = mockStoreCreator(initialState);
  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter
  });
}

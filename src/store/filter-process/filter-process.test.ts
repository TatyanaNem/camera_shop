import { CameraCategory, CameraLevel, CameraType } from '../../common/const';
import { TFilterProcess } from '../../common/types/state';
import { addCameraLevel, addCameraType, filterProcessReducer, resetFilters, setCategory, setMaxPrice, setMinPrice } from './filter-process';

describe('test of filter-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TFilterProcess = {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    };

    expect(filterProcessReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with new min price', () => {
    const prevState: Partial<TFilterProcess> = {
      minPrice: '',
      maxPrice: ''
    };
    const updatedState: Partial<TFilterProcess> = {
      minPrice: '5000',
      maxPrice: ''
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: setMinPrice, payload: '5000'})).toEqual(updatedState);
  });

  it('should update state with new max price', () => {
    const prevState: Partial<TFilterProcess> = {
      minPrice: '5000',
      maxPrice: ''
    };
    const updatedState: Partial<TFilterProcess> = {
      minPrice: '5000',
      maxPrice: '25000'
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: setMaxPrice, payload: '25000'})).toEqual(updatedState);
  });

  it('should update state with new category', () => {
    const prevState: Partial<TFilterProcess> = {
      category: null,
    };
    const updatedState: Partial<TFilterProcess> = {
      category: CameraCategory.Photocamera
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: setCategory, payload: CameraCategory.Photocamera})).toEqual(updatedState);
  });

  it('should update state with camera types', () => {
    const prevState: Partial<TFilterProcess> = {
      cameraType: []
    };
    const updatedState: Partial<TFilterProcess> = {
      cameraType: [CameraType.Collection]
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: addCameraType, payload: CameraType.Collection})).toEqual(updatedState);
  });

  it('should update state with levels', () => {
    const prevState: Partial<TFilterProcess> = {
      levels: []
    };
    const updatedState: Partial<TFilterProcess> = {
      levels: [CameraLevel.Professional]
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: addCameraLevel, payload: CameraLevel.Professional})).toEqual(updatedState);
  });

  it('should reset state correctly', () => {
    const prevState: Partial<TFilterProcess> = {
      minPrice: '5000',
      maxPrice: '25000',
      category: CameraCategory.Videocamera,
      unavailableType:[CameraType.Snapshot, CameraType.Film],
      cameraType: [CameraType.Collection],
      levels: [CameraLevel.Professional]
    };
    const updatedState: Partial<TFilterProcess> = {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    };

    expect(filterProcessReducer(prevState as TFilterProcess, {type: resetFilters})).toEqual(updatedState);
  });
});


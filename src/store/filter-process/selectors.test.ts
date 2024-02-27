import { CameraCategory, CameraLevel, CameraType, NameSpace } from '../../common/const';
import { selectCategory, selectCurrentCameraLevels, selectCurrentCameraTypes, selectMaxPrice, selectMinPrice } from './selectors';

describe('FilterProcess selectors', () => {
  const state = {
    [NameSpace.FilterProcess]: {
      minPrice: '5000',
      maxPrice: '25000',
      category: CameraCategory.Photocamera,
      unavailableType:[],
      cameraType: [CameraType.Collection],
      levels: [CameraLevel.Professional]
    }
  };

  it('should return correct data', () => {
    const minPrice = selectMinPrice(state);
    const maxPrice = selectMaxPrice(state);
    const category = selectCategory(state);
    const cameraTypes = selectCurrentCameraTypes(state);
    const levels = selectCurrentCameraLevels(state);

    expect(minPrice).toBe('5000');
    expect(maxPrice).toBe('25000');
    expect(category).toBe(CameraCategory.Photocamera);
    expect(cameraTypes.length).toBe(1);
    expect(levels[0]).toBe(CameraLevel.Professional);
  });
});

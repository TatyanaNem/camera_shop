import { CameraCategory, CameraLevel, CameraType } from '../common/const';
import { TCamera } from '../common/types/camera';
import faker from 'faker';

export const mockActiveProduct: TCamera = {
  id: 0,
  name: faker.lorem.words(3),
  vendorCode: faker.random.alphaNumeric(20),
  type: CameraType.Collection,
  category: CameraCategory.Photocamera,
  description: faker.lorem.paragraph(),
  level: CameraLevel.Professional,
  rating: faker.datatype.number({min: 1, max: 5}),
  price: 100,
  previewImg: 'string',
  previewImg2x: 'string',
  previewImgWebp: 'string',
  previewImgWebp2x: 'string',
  reviewCount: 0,
};

import { TPromo } from '../common/types/promo';
import faker from 'faker';

export const mockPromoSlide: TPromo = {
  id: faker.datatype.number(20000),
  name: faker.lorem.words(3),
  previewImg: 'string',
  previewImg2x: 'string',
  previewImgWebp: 'string',
  previewImgWebp2x: 'string'
};

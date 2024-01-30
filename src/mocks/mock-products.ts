import faker from 'faker';
import { CameraCategory, CameraLevel, CameraType } from '../common/const';
import { TCamera } from '../common/types/camera';

export const mockProducts: TCamera[] = [
  {
    id: faker.datatype.number(20000),
    name: faker.lorem.words(3),
    vendorCode: faker.random.alphaNumeric(20),
    type: CameraType.Collection,
    category: CameraCategory.Photo,
    description: faker.lorem.paragraph(),
    level: CameraLevel.Professional,
    rating: faker.datatype.number({min: 1, max: 5}),
    price: faker.datatype.number(10000),
    previewImg: 'string',
    previewImg2x: 'string',
    previewImgWebp: 'string',
    previewImgWebp2x: 'string',
    reviewCount: faker.datatype.number(20),
  },
  {
    id: faker.datatype.number(20000),
    name: faker.lorem.words(3),
    vendorCode: faker.random.alphaNumeric(20),
    type: CameraType.Film,
    category: CameraCategory.Video,
    description: faker.lorem.paragraph(),
    level: CameraLevel.Amateur,
    rating: faker.datatype.number({min: 1, max: 5}),
    price: faker.datatype.number(10000),
    previewImg: 'string',
    previewImg2x: 'string',
    previewImgWebp: 'string',
    previewImgWebp2x: 'string',
    reviewCount: faker.datatype.number(20),
  },
  {
    id: faker.datatype.number(20000),
    name: faker.lorem.words(3),
    vendorCode: faker.random.alphaNumeric(20),
    type: CameraType.Digital,
    category: CameraCategory.Photo,
    description: faker.lorem.paragraph(),
    level: CameraLevel.Zero,
    rating: faker.datatype.number({min: 1, max: 5}),
    price: faker.datatype.number(10000),
    previewImg: 'string',
    previewImg2x: 'string',
    previewImgWebp: 'string',
    previewImgWebp2x: 'string',
    reviewCount: faker.datatype.number(20),
  }
];

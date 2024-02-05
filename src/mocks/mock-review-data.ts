import faker from 'faker';
import { TPostReviewData } from '../common/types/review-data';

export const mockReviewData: TPostReviewData = {
  cameraId: faker.datatype.number(20),
  userName: faker.lorem.word(),
  advantage: faker.lorem.sentence(),
  disadvantage: faker.lorem.sentence(),
  review: faker.lorem.paragraph(3),
  rating: faker.datatype.number({min: 1, max: 5}),
};

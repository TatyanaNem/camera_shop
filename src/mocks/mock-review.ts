import { TReview } from '../common/types/review';
import faker from 'faker';

export const mockReview: TReview = {
  id: faker.datatype.string(),
  userName: faker.lorem.word(),
  advantage: faker.lorem.sentence(),
  disadvantage: faker.lorem.sentence(),
  review: faker.lorem.paragraph(3),
  rating: faker.datatype.number({min: 1, max: 5}),
  createAt: faker.date.past().toLocaleDateString(),
  cameraId: 0,
};

import { CameraCategory, CameraLevel, CameraType } from '../const';
import { TSortOrder, TSortType } from './sort-types';

export type TSearchParams = {
  sort: TSortType;
  order: TSortOrder;
  minPrice: string;
  maxPrice: string;
  category: CameraCategory | null;
  type: CameraType[];
  level: CameraLevel[];
}

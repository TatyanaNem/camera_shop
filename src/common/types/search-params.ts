import { TSortOrder, TSortType } from './sort-types';

export type TSearchParams = {
  sort: TSortType;
  order: TSortOrder;
  minPrice: string;
  maxPrice: string;
}

import { TSortOrder, TSortType } from './sort-types';

export type TSearchParams = {
  page: string;
  sort: TSortType;
  order: TSortOrder;
}

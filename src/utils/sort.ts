import { TCamera } from '../common/types/camera';
import { TSortOrder } from '../common/types/sort-types';

export function getSortedProducts (products: TCamera[], order: TSortOrder) {
  return [...products].sort((a, b) => {
    if (a.rating === null && b.rating === null) {
      return 0;
    }
    if (a.rating === null) {
      return 1;
    }
    if (b.rating === null) {
      return -1;
    }

    const popularityComparison = order === 'desc' ? b.rating - a.rating : a.rating - b.rating;

    if (popularityComparison === 0) {
      if (order === 'desc') {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    }
    return popularityComparison;
  });
}

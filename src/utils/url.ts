import { APIRoute, BACKEND_URL, PRODUCT_LIMIT_PER_PAGE } from '../common/const';
import { TSearchParams } from '../common/types/search-params';

type TArguments = {
  pageNumber: number;
  params: Partial<TSearchParams>;
}

export const getStartPrice = (page: number) => (page - 1) * PRODUCT_LIMIT_PER_PAGE;

export function getUrlWithSearchParams (searchParams: TArguments) {
  const {pageNumber, params} = searchParams;
  let url = `${BACKEND_URL}${APIRoute.Cameras}`;

  if (pageNumber) {
    const start = getStartPrice(pageNumber);
    url = `${url}?_start=${start}&_limit=${PRODUCT_LIMIT_PER_PAGE}`;
  }

  if (params.sort) {
    url = `${url}&_sort=${params.sort}`;
  }

  if (params.order) {
    url = `${url}&_order=${params.order}`;
  }
  return url;
}

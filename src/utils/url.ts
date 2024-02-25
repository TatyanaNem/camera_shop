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

  if (params?.minPrice && params?.maxPrice && params?.minPrice === params?.maxPrice) {
    url = `${url}&_like=${params?.minPrice}`;
  }

  if (params?.minPrice && !/_like/g.test(url)) {
    url = `${url}&price_gte=${params?.minPrice}`;
  }

  if (params?.maxPrice && !/_like=/g.test(url)) {
    url = `${url}&price_lte=${params?.maxPrice}`;
  }

  if (params?.category) {
    url = `${url}&category=${params?.category}`;
  }

  if (params?.type?.length) {
    url = params.type.reduce((acc, type) => `${acc}&type=${type}`, url);
  }

  if (params?.level?.length) {
    url = params.level.reduce((acc, level) => `${acc}&level=${level}`, url);
  }

  return url;
}

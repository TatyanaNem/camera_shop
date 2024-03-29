import { TUnavailableType } from './types/filter-types';
import { TSortInputType, TSortType } from './types/sort-types';

export const RATING_NUMBER = 5;
export const PRODUCT_LIMIT_PER_PAGE = 9;
export const DEFAULT_PAGE = 1;
export const DEFAULT_TAB = 1;
export const REVIEWS_SHOW_NUMBER = 3;
export const FIRST_SLIDE_ITEM_INDEX = 0;
export const SLIDES_PER_VIEW = 3;
export const DEFAULT_DELAY = 500;

export enum AppRoute {
  Root = '/',
  Catalog='catalog',
  Product = 'product',
  Basket = 'basket',
  NotFound = 'not-found'
}

export enum NameSpace {
  DataProcess = 'DATA_PROCESS',
  AppProcess = 'APP_PROCESS',
  ReviewProcess = 'REVIEW_PROCESS',
  CartProcess = 'CART_PROCESS',
  SearchProcess = 'SEARCH_PROCESS',
  SortProcess = 'SORT_PROCESS',
  FilterProcess = 'FILTER_PROCESS'
}

export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Promo = '/promo',
  Cameras = '/cameras',
  Similar = '/similar',
  Reviews = '/reviews',
  Coupons = '/coupons',
  Orders = '/orders'
}

export enum CameraType {
  Digital = 'Цифровая',
  Film = 'Плёночная',
  Snapshot = 'Моментальная',
  Collection = 'Коллекционная',
}

export enum CameraCategory {
  Photocamera = 'Фотокамера',
  Videocamera = 'Видеокамера'
}

export enum CameraLevel {
  Zero = 'Нулевой',
  Hobby = 'Любительский',
  Professional = 'Профессиональный'
}

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed'
 }

export const PathName: Record<string, string> = {
  'root': 'Главная',
  [AppRoute.Catalog]: 'Каталог',
  [AppRoute.Basket]: 'Корзина',
} as const;

export enum ProductTab {
  Characteristic = 'Характеристики',
  Description = 'Описание',
}

export enum ApiError {
  OnFetchPromo = 'Ошибка при загрузке промо-товаров',
  OnFetchProducts = 'Ошибка при загрузке списка товаров',
  OnFetchActiveProduct ='Ошибка при загрузке товара по ID',
  OnFetchSimilar = 'Ошибка при загрузке похожих товаров',
  OnFetchReviews = 'Ошибка при загрузке комментариев',
  OnPostReview = 'Ошибка при записи нового комментария',
  OnSendPromoCode = 'Ошибка отправки промокода',
  OnSendOrder = 'Не удалось отправить заказ'
}

export enum SearchProductsError {
  DataLoadingError = 'Произошла ошибка загрузки данных',
  EmptyDataResult = 'Ничего не найдено',
  LoadingData = 'Ищем...',
  NotEnoughSearchValueLength = 'Не менее 3 символов'
}

export enum QueryKey {
  Search = 'name_like',
  SortOrder = '_order',
  SortType = '_sort',
  FilterType = 'type',
  FilterCategory = 'category',
  FilterLevel = 'level',
  BottomPrice = 'price_gte',
  TopPrice = 'price_lte',
  Page = 'page'
}

export const SortInputData: Partial<Record<TSortType, TSortInputType>> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

export const DEFAULT_SORT_TYPE: TSortType = 'price';
export const UNAVAILABLE_TYPE: TUnavailableType[] = [CameraType.Film, CameraType.Snapshot];

export enum ProductAmount {
  Min = 1,
  Max = 99
}

export enum PromoValidationStatus {
  Valid = 'valid',
  NotValid = 'not-valid',
  Default = 'default',
  Error = 'error'
}

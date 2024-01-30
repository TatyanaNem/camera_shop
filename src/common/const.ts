
export const RATING_NUMBER = 5;
export const PRODUCT_LIMIT_PER_PAGE = 9;
export const DEFAULT_PAGE = 1;
export const DEFAULT_TAB = 1;
export const REVIEWS_SHOW_NUMBER = 3;

export enum AppRoute {
  Root = '/',
  Catalog='catalog',
  Product = 'product',
  Basket = 'basket',
  NotFound = 'not-found'
}

export enum NameSpace {
  DataProcess = 'DATA_PROCESS',
  AppProcess = 'APP_PROCESS'
}

export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Promo = '/promo',
  Cameras = '/cameras',
  Similar = '/similar',
  Reviews = '/reviews'
}

export enum CameraType {
  Collection = 'collection',
  Instant = 'instant',
  Digital = 'digital',
  Film = 'film'
}

export enum CameraCategory {
  Video = 'video',
  Photo = 'photo'
}

export enum CameraLevel {
  Zero = 'zero',
  Amateur = 'amateur',
  Professional = 'professional'
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

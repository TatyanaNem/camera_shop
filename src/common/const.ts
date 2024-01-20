
export const RATING_NUMBER = 5;
export const PRODUCT_LIMIT_PER_PAGE = 2;
export const DEFAULT_PAGE = 1;

export enum AppRoute {
  Root = '/',
  Product = '/product',
  Basket = '/basket',
  NotFound = '/not-found'
}

export enum NameSpace {
  DataProcess = 'DATA_PROCESS'
}

export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Promo = '/promo',
  Cameras = '/cameras'
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

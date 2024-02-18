export type TSortType = 'price' | 'rating' | '';

export type TSortInputType = {
  id: 'sortPrice' | 'sortPopular';
  label: 'по цене' | 'по популярности';
}

export type TSortOrder = 'asc' | 'desc' | '';

export type TSortOrderDirection = 'up' | 'down';

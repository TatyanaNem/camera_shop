export type TUsePaginationProps = {
  itemsPerPage: number;
  productsTotalCount: number;
}

export type TUsePaginationReturn = {
  page: number;
  setCurrentPage: (currentPage: number) => void;
  pageTotalCount: number;
  firstIndex: number;
  lastIndex: number;
  pageNumbers: number[];
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

export type TUsePagination = (args: TUsePaginationProps) => TUsePaginationReturn;

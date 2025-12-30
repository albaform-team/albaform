import { useState } from 'react';

const usePagination = (initialPageSize = 10) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleChangePage = (_: unknown, nextPage: number) => {
    setPage(nextPage);
  };

  const handleChangePageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(Number(e.target.value));
    setPage(0);
  };

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
    handleChangePage,
    handleChangePageSize,
  };
};

export default usePagination;

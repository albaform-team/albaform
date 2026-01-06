import { useCallback, useMemo, useState } from 'react';

interface PaginationMeta {
  totalPage: number;
  offset: number;
  hasNext: boolean;
}

interface UsePaginationOptions {
  limit: number;
  initialPage?: number;
}

const usePagination = ({ limit, initialPage = 1 }: UsePaginationOptions) => {
  const [page, setPage] = useState(initialPage);
  const [meta, setMeta] = useState<PaginationMeta>({
    totalPage: 0,
    offset: 0,
    hasNext: false,
  });

  const offset = useMemo(() => {
    return limit * (page - 1);
  }, [limit, page]);

  const updateMeta = useCallback(
    (count: number, hasNext: boolean, offset: number) => {
      setMeta({
        totalPage: Math.ceil(count / limit),
        hasNext: hasNext,
        offset: offset,
      });
    },
    [limit]
  );

  return {
    page,
    setPage,
    limit,
    offset,
    meta,
    updateMeta,
  };
};

export default usePagination;

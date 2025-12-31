import { useCallback, useMemo, useState } from 'react';

interface PaginationMeta {
  titalPage: number;
  offset: number;
  hasNext: boolean;
}

interface UsePaginationOptions {
  limit: number;
  initialPage?: number;
}

export const usePagination = ({
  limit,
  initialPage = 1,
}: UsePaginationOptions) => {
  const [page, setPage] = useState(initialPage);
  const [meta, setMeta] = useState<PaginationMeta>({
    titalPage: 0,
    offset: 0,
    hasNext: false,
  });

  const offset = useMemo(() => {
    return limit * (page - 1);
  }, [limit, page]);

  const updateMeta = useCallback(
    (count: number, hasNext: boolean, offset: number) => {
      setMeta({
        titalPage: Math.ceil(count / limit),
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

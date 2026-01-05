import { useCallback, useState } from 'react';

type Meta = {
  offset: number;
  hasNext: boolean;
  totalCount: number;
};

type PageResponseMeta = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
};

const useInfinitePagination = (limit: number) => {
  const [meta, setMeta] = useState<Meta>({
    offset: 0,
    hasNext: true,
    totalCount: 0,
  });

  const reset = useCallback(() => {
    setMeta({ offset: 0, hasNext: true, totalCount: 0 });
  }, []);

  const updateFromResponse = useCallback((res: PageResponseMeta) => {
    setMeta({
      offset: res.offset + res.limit,
      hasNext: res.hasNext,
      totalCount: res.count,
    });
  }, []);

  return { meta, limit, reset, updateFromResponse };
};

export default useInfinitePagination;

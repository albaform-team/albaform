import usePagination from '@mui/material/usePagination';

import { getVisiblePages } from '@/utils/pagination';

import * as S from './FixedPagination.style';

interface Props {
  page: number;
  count: number;
  onChange: (page: number) => void;
  visibleCount?: number;
}

const FixedPagination = ({
  page,
  count,
  visibleCount = 7,
  onChange,
}: Props) => {
  const { items } = usePagination({
    page,
    count,
    boundaryCount: count,
    onChange: (_, p) => onChange(p),
  });

  const visiblePages = getVisiblePages(page, count, visibleCount);

  return (
    <S.FixedPaginationWrapper direction="row">
      {items
        .filter(item => {
          if (item.type === 'previous' || item.type === 'next') {
            return true;
          }

          if (item.type === 'page') {
            return visiblePages.includes(item.page!);
          }
        })
        .map((item, idx) => (
          <S.TablePaginationItem key={idx} {...item} shape="rounded" />
        ))}
    </S.FixedPaginationWrapper>
  );
};

export default FixedPagination;

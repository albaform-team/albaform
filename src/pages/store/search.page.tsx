import Link from 'next/link';
import { useRouter } from 'next/router';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import ListCard from '@/pages/store/_components/ListCard/ListCard';
import * as S from '@/pages/store/search.page.style';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import FilterOptionSelect from './_components/Drawer/FilterDrawer';
import PaginationRounded from './_components/Pagination';
import { useNotice } from './_hooks/useNotice';

const Search = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  const [sortValue, setSortValue] = useState('마감임박순');

  const router = useRouter();
  const { q } = router.query;

  const keyword = typeof q === 'string' ? q : '';

  const { notice } = useNotice(sortValue, keyword);

  useEffect(() => {
    if (!router.isReady) return;

    if (!keyword) {
      router.push('/store');
    }
  }, [router.isReady, keyword]);

  const showEmptyMessage = keyword.length > 0 && notice?.items.length === 0;

  return (
    <S.SearchContainer>
      <S.SearchHeader>
        <S.SearchTitle>
          <S.SearchQuery>{q}</S.SearchQuery>에 대한 공고 목록
        </S.SearchTitle>
        <S.JobFilterContainer>
          <FilterOptionSelect value={sortValue} onChange={setSortValue} />
          {isMobile ? <RightDrawer /> : <BasicPopover />}
        </S.JobFilterContainer>
      </S.SearchHeader>
      <S.JobSearchSection>
        {notice?.items.map(({ item }) => (
          <Link key={item.id} href={`/store/${item.shop.item.id}/${item.id}`}>
            <ListCard key={item.id} notice={item} />
          </Link>
        ))}
        {showEmptyMessage && <div>검색값이 없습니다</div>}
      </S.JobSearchSection>
      <PaginationRounded></PaginationRounded>
    </S.SearchContainer>
  );
};

export default Search;

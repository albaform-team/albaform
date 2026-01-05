import Link from 'next/link';
import { useRouter } from 'next/router';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
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

  const { notice, setNotice, sortedItems, setSortedItems } = useNotice();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotice();
        setNotice(data);
        setSortedItems(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotice();
  }, []);

  const keyword = typeof q === 'string' ? q : '';

  const searchFilter =
    notice?.items.filter(({ item }) => {
      return item.shop.item.name.includes(keyword);
    }) ?? [];

  useEffect(() => {
    if (!router.isReady) return;

    if (!keyword) {
      router.push('/store');
    }
  }, [keyword, router.isReady]);

  const showEmptyMessage = keyword.length > 0 && searchFilter.length === 0;

  useEffect(() => {
    if (!notice) return;

    const newItem = [...searchFilter];

    switch (sortValue) {
      case '마감임박순':
        newItem.sort(
          (a, b) =>
            new Date(a.item.startsAt).getTime() -
            new Date(b.item.startsAt).getTime()
        );
        break;
      case '시급많은순':
        newItem.sort((a, b) => b.item.hourlyPay - a.item.hourlyPay);
        break;
      case '시간적은순':
        newItem.sort((a, b) => a.item.workhour - b.item.workhour);
        break;
      case '가나다순':
        newItem.sort((a, b) =>
          a.item.shop.item.name.localeCompare(b.item.shop.item.name)
        );
        break;
    }
    setSortedItems(newItem);
  }, [sortValue, notice]);

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
        {sortedItems.map(({ item }) => (
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

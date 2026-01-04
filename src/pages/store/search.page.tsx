import { useRouter } from 'next/router';

import { Global } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import ListCard from '@/pages/store/_components/ListCard/ListCard';
import { sortSelectStyle } from '@/pages/store/_components/SelectBox.style';
import * as S from '@/pages/store/search.page.style';
import { NoticeListResponse } from '@/types/user/noticeList';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import PaginationRounded from './_components/Pagination';
import BasicSelect from './_components/SelectBox';

const Search = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);
  const [isSearchEmpty, setIsSearchEmpty] = useState<boolean>(false);

  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotice();
        setNotice(data);
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

  const showEmptyMessage = keyword.length > 0 && searchFilter.length === 0;

  return (
    <S.SearchContainer>
      <S.SearchHeader>
        <S.SearchTitle>
          <S.SearchQuery>{q}</S.SearchQuery>에 대한 공고 목록
        </S.SearchTitle>
        <S.JobFilterContainer>
          <Global styles={sortSelectStyle} />
          <BasicSelect />
          {isMobile ? <RightDrawer /> : <BasicPopover />}
        </S.JobFilterContainer>
      </S.SearchHeader>
      <S.JobSearchSection>
        {searchFilter.map(({ item }) => (
          <ListCard key={item.id} notice={item} />
        ))}
        {showEmptyMessage && <div>검색값이 없습니다</div>}
      </S.JobSearchSection>
      <PaginationRounded></PaginationRounded>
    </S.SearchContainer>
  );
};

export default Search;

import { Global } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

import ListCard from '@/pages/store/_components/ListCard/ListCard';
import { mockNotices } from '@/pages/store/_components/ListCard/types/mockNotices';
import { sortSelectStyle } from '@/pages/store/_components/SelectBox.style';
import * as S from '@/pages/store/search.page.style';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import PaginationRounded from './_components/Pagination';
import BasicSelect from './_components/SelectBox';

const Search = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  return (
    <S.SearchContainer>
      <S.SearchHeader>
        <S.SearchTitle>
          <S.SearchQuery>맛집</S.SearchQuery>에 대한 공고 목록
        </S.SearchTitle>
        <S.JobFilterContainer>
          <Global styles={sortSelectStyle} />
          <BasicSelect />
          {isMobile ? <RightDrawer /> : <BasicPopover />}
        </S.JobFilterContainer>
      </S.SearchHeader>
      <S.JobSearchSection>
        {mockNotices.items.map(({ item }) => (
          <ListCard key={item.id} notice={item} />
        ))}
      </S.JobSearchSection>
      <PaginationRounded></PaginationRounded>
    </S.SearchContainer>
  );
};

export default Search;

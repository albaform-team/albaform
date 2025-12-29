import { Global } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ListCard from '@/components/ListCard/ListCard';
import { sortSelectStyle } from '@/pages/store/_components/SelectBox.style';
import * as S from '@/pages/store/storelist.page.style';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import PaginationRounded from './_components/Pagination';
import BasicSelect from './_components/SelectBox';

const StoreList = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  return (
    <>
      <Header user="user" />
      <S.JobSuggestSection>
        <div>
          <S.JobSuggestTitle>맞춤 공고</S.JobSuggestTitle>
          <div>
            <S.JobSuggestList>
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
              <ListCard />
            </S.JobSuggestList>
          </div>
        </div>
      </S.JobSuggestSection>

      <S.AllJobContainer>
        <S.JobListHeader>
          <S.JobListTitle>전체 공고</S.JobListTitle>
          <S.JobFilterContainer>
            <Global styles={sortSelectStyle} />
            <BasicSelect />
            {isMobile ? <RightDrawer /> : <BasicPopover />}
          </S.JobFilterContainer>
        </S.JobListHeader>
        <S.AllJobListContainer>
          <S.AllJobList>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </S.AllJobList>
        </S.AllJobListContainer>
        <PaginationRounded></PaginationRounded>
      </S.AllJobContainer>
      <Footer />
    </>
  );
};

export default StoreList;

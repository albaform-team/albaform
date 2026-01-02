import { Global } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

import ListCard from '@/pages/store/_components/ListCard/ListCard';
import { mockNotices } from '@/pages/store/_components/ListCard/types/mockNotices';
import { sortSelectStyle } from '@/pages/store/_components/SelectBox.style';
import * as S from '@/pages/store/index.page.style';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import PaginationRounded from './_components/Pagination';
import BasicSelect from './_components/SelectBox';

const StoreList = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');

  const sortedByDeadline = mockNotices.items.sort(
    (a, b) =>
      new Date(a.item.startsAt).getTime() - new Date(b.item.startsAt).getTime()
  );
  return (
    <>
      <S.JobSuggestSection>
        <div>
          <S.JobSuggestTitle>맞춤 공고</S.JobSuggestTitle>
          <div>
            <S.JobSuggestList>
              {mockNotices.items.map(({ item }) => (
                <ListCard key={item.id} notice={item} />
              ))}
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
            {sortedByDeadline.map(({ item }) => (
              <ListCard key={item.id} notice={item} />
            ))}
          </S.AllJobList>
        </S.AllJobListContainer>
        <PaginationRounded></PaginationRounded>
      </S.AllJobContainer>
    </>
  );
};

export default StoreList;

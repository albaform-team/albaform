import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import ListCard from '@/pages/store/_components/ListCard/ListCard';
import { mockNotices } from '@/pages/store/_components/ListCard/types/mockNotices';
import * as S from '@/pages/store/index.page.style';
import useAuthStore from '@/stores/useAuthStore';
import { MyProfile } from '@/types/user/myProfile';
import { NoticeListResponse } from '@/types/user/noticeList';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import FilterOptionSelect from './_components/Drawer/FilterDrawer';
import PaginationRounded from './_components/Pagination';

const StoreList = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);
  const [profile, setProfile] = useState<MyProfile | null>(null);
  const { user } = useAuthStore.getState();

  const sortedByDeadline = mockNotices.items.sort(
    (a, b) =>
      new Date(a.item.startsAt).getTime() - new Date(b.item.startsAt).getTime()
  );

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotice();
        setNotice(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotice();
  }, []);

  return (
    <>
      <S.JobSuggestSection>
        <div>
          <S.JobSuggestTitle>맞춤 공고</S.JobSuggestTitle>
          <div>
            <S.JobSuggestList>
              {notice?.items.map(({ item }) => (
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
            <FilterOptionSelect />
            {isMobile ? <RightDrawer /> : <BasicPopover />}
          </S.JobFilterContainer>
        </S.JobListHeader>
        <S.AllJobListContainer>
          <S.AllJobList>
            {notice?.items.map(({ item }) => (
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

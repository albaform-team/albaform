import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import ListCard from '@/pages/store/_components/ListCard/ListCard';
import * as S from '@/pages/store/index.page.style';
import { NoticeListResponse } from '@/types/user/noticeList';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import FilterOptionSelect from './_components/Drawer/FilterDrawer';
import PaginationRounded from './_components/Pagination';

const StoreList = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);
  const [sortValue, setSortValue] = useState('마감임박순');
  const [sortedItems, setSortedItems] = useState<NoticeListResponse['items']>(
    []
  );

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotice();
        setNotice(data);
        setSortedItems(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotice();
  }, []);

  useEffect(() => {
    if (!notice) return;

    const newItem = [...notice?.items];

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
            <FilterOptionSelect value={sortValue} onChange={setSortValue} />
            {isMobile ? <RightDrawer /> : <BasicPopover />}
          </S.JobFilterContainer>
        </S.JobListHeader>
        <S.AllJobListContainer>
          <S.AllJobList>
            {sortedItems.map(({ item }) => (
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

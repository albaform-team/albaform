import Link from 'next/link';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import { getMyProfile } from '@/lib/services/noticeService';
import ListCard from '@/pages/store/_components/ListCard/ListCard';
import * as S from '@/pages/store/index.page.style';
import useAuthStore from '@/stores/useAuthStore';
import { NoticeListResponse } from '@/types/user/noticeList';

import RightDrawer from './_components/DetailFilter/Drawer';
import BasicPopover from './_components/DetailFilter/Popover';
import FilterOptionSelect from './_components/Drawer/FilterDrawer';
import PaginationRounded from './_components/Pagination';
import { useNotice } from './_hooks/useNotice';

const LIMIT = 6;

const StoreList = () => {
  const isMobile = useMediaQuery('(max-width: 743px)');
  const user = useAuthStore(state => state.user);
  const [sortValue, setSortValue] = useState('마감임박순');
  const [page, setPage] = useState(1);

  const { notice } = useNotice({
    sortValue,
    offset: LIMIT * (page - 1),
    limit: LIMIT,
  });

  const [personalItems, setPersonalItems] = useState<
    NoticeListResponse['items']
  >([]);

  const { notice: personalNotice } = useNotice({
    sortValue,
    offset: 0,
    limit: 6,
  });

  useEffect(() => {
    if (!personalNotice) return;

    if (!user?.id) {
      setPersonalItems(personalNotice.items);
      return;
    }

    const fetchPersonalNotice = async () => {
      try {
        const userData = await getMyProfile(user.id);

        if (!userData.address) {
          setPersonalItems(personalNotice.items);
          return;
        }

        const filtered = personalNotice.items.filter(({ item }) =>
          userData.address!.includes(item.shop.item.address1)
        );

        setPersonalItems(filtered.length ? filtered : personalNotice.items);
      } catch {
        setPersonalItems(personalNotice.items);
      }
    };

    fetchPersonalNotice();
  }, [personalNotice, user?.id]);

  useEffect(() => {
    setPage(1);
  }, [sortValue]);

  return (
    <>
      <S.JobSuggestSection>
        <div>
          <S.JobSuggestTitle>맞춤 공고</S.JobSuggestTitle>
          <div>
            <S.JobSuggestList>
              {personalItems?.map(({ item }) => (
                <Link
                  key={item.id}
                  href={`/store/${item.shop.item.id}/${item.id}`}
                >
                  <ListCard notice={item} />
                </Link>
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
            {notice?.items.map(({ item }) => (
              <Link
                key={item.id}
                href={`/store/${item.shop.item.id}/${item.id}`}
              >
                <ListCard key={item.id} notice={item} />
              </Link>
            ))}
          </S.AllJobList>
        </S.AllJobListContainer>
        <PaginationRounded
          page={page}
          onChange={setPage}
          totalCount={notice?.count ?? 0}
          limit={LIMIT}
        ></PaginationRounded>
      </S.AllJobContainer>
    </>
  );
};

export default StoreList;

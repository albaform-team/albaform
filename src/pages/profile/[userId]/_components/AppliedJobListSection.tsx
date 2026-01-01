import { isAxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import TablePagination, {
  Column,
} from '@/components/tablePagination/TablePagination';
import { STORE_ROUTES } from '@/constants/routes';
import { usePagination } from '@/hooks/usePagination';
import { GetUserApplications } from '@/lib/services/userService';
import { media } from '@/styles/media';
import { User } from '@/types/api/user';
import { ApplicationStatus } from '@/types/api/userAppliedJobList';

import { useResponsiveColumns } from '../../../../hooks/useApplicantColumns';
import {
  AppliedJobListItem,
  AppliedJobListViewModel,
  getStatusLabel,
  mapAppliedJobToApplicantRow,
} from '../_utils/mapper';

import * as S from './AppliedJobListSection.style';
import EmptyStateSection from './EmptyStateSection';

interface Props {
  userId: string | null;
  userInfo: Required<User> | null;
}

type Applicant = {
  shop: string;
  date: string;
  pay: string;
  status: ApplicationStatus;
};

const allColumns = [
  {
    key: 'shop',
    header: '가게',
    render: (row: Applicant) => <div>{row.shop}</div>,
  },
  {
    key: 'date',
    header: '일자',
    render: (row: Applicant) => <div>{row.date}</div>,
  },
  {
    key: 'pay',
    header: '시급',
    render: (row: Applicant) => row.pay,
  },
  {
    key: 'status',
    header: '상태',
    render: (row: Applicant) => (
      <S.StatusTag status={row.status}>
        {getStatusLabel(row.status)}
      </S.StatusTag>
    ),
  },
] satisfies Column<Applicant>[];

const key = {
  mobile: ['shop', 'status'],
  tablet: ['shop', 'date', 'status'],
  desktop: ['shop', 'date', 'pay', 'status'],
};

const AppliedJobListSection = ({ userId, userInfo }: Props) => {
  const [appliedJobList, setAppliedJobList] = useState<AppliedJobListItem[]>(
    []
  );
  const { page, setPage, limit, offset, meta, updateMeta } = usePagination({
    limit: 5,
  });

  const { columns, isTabletUp } = useResponsiveColumns(allColumns, key, media);

  useEffect(() => {
    if (!userId) return;

    const fetchUserInfo = async () => {
      try {
        const res: AppliedJobListViewModel = await GetUserApplications(
          userId,
          offset,
          limit
        );
        setAppliedJobList(res.items as AppliedJobListItem[]);
        updateMeta(res.count, res.hasNext, res.offset);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetchUserInfo();
  }, [userId, offset, limit, updateMeta]);

  const rows = useMemo(
    () => appliedJobList.map(mapAppliedJobToApplicantRow),
    [appliedJobList]
  );

  if (!userInfo) return;

  return (
    <S.AppliedJobListSection>
      {appliedJobList.length !== 0 ? (
        <>
          <S.Title>신청 내역</S.Title>
          <TablePagination
            paginationConfig={{
              count: meta.titalPage,
              visibleCount: isTabletUp ? 7 : 5,
            }}
            columns={columns}
            rows={rows}
            page={page}
            onChange={setPage}
            getRowId={row => row.shop + row.date}
          />
        </>
      ) : (
        <EmptyStateSection
          title="신청 내역"
          description="아직 신청 내역이 없어요."
          actionLabel="공고 보러가기"
          href={STORE_ROUTES.ROOT}
        />
      )}
    </S.AppliedJobListSection>
  );
};

export default AppliedJobListSection;

import { isAxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import TablePagination, {
  Column,
} from '@/components/tablePagination/TablePagination';
import { STORE_ROUTES } from '@/constants/routes';
import { GetUserApplications } from '@/lib/services/userService';
import { media } from '@/styles/media';
import { User } from '@/types/api/user';
import { ApplicationStatus } from '@/types/api/userAppliedJobList';

import { useResponsiveColumns } from '../../../../hooks/useApplicantColumns';
import {
  AppliedJobListItem,
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

const AppliedJobListSection = ({ userId, userInfo }: Props) => {
  const [appliedJobList, setAppliedJobList] = useState<AppliedJobListItem[]>(
    []
  );
  const { columns, isTabletUp } = useResponsiveColumns(
    allColumns,
    {
      mobile: ['shop', 'status'],
      tablet: ['shop', 'date', 'status'],
      desktop: ['shop', 'date', 'pay', 'status'],
    },
    media
  );

  useEffect(() => {
    if (!userId) return;

    const fetchUserInfo = async () => {
      try {
        const appliedJobList = await GetUserApplications(userId, 0, 5);

        setAppliedJobList(appliedJobList.items as AppliedJobListItem[]);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetchUserInfo();
  }, [userId]);

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
            paginationConfig={{ count: 100, visibleCount: isTabletUp ? 7 : 5 }}
            columns={columns}
            rows={rows}
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

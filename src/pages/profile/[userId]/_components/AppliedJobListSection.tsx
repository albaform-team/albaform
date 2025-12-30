import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import TablePagination, {
  Column,
} from '@/components/tablePagination/TablePagination';
import { STORE_ROUTES } from '@/constants/routes';
import { GetUserApplications } from '@/lib/services/userService';
import { User } from '@/types/api/user';
import { ApplicationStatus } from '@/types/api/userAppliedJobList';

import { AppliedJobListItem } from '../_utils/mapper';

import * as S from './AppliedJobListSection.style';
import EmptyStateSection from './EmptyStateSection';

interface Props {
  userId: string | null;
  userInfo: Required<User> | null;
}

type Applicant = {
  shop: string;
  date: string;
  pay: number;
  status: ApplicationStatus;
};

const columns = [
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
    render: (row: Applicant) => row.pay.toLocaleString(),
  },
  {
    key: 'status',
    header: '상태',
    render: (row: Applicant) => (
      <span style={{ fontWeight: 700 }}>
        {row.status === 'accepted' ? '승인' : '대기'}
      </span>
    ),
  },
] satisfies Column<Applicant>[];

const AppliedJobListSection = ({ userId, userInfo }: Props) => {
  const [appliedJobList, setAppliedJobList] = useState<AppliedJobListItem[]>(
    []
  );

  useEffect(() => {
    if (!userId) return;

    const fetchUserInfo = async () => {
      try {
        const appliedJobList = await GetUserApplications(userId, 0, 10);

        setAppliedJobList(appliedJobList.items as AppliedJobListItem[]);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (!userInfo) return;
  console.log(appliedJobList);

  const rows: Applicant[] = appliedJobList.map(job => ({
    shop: job.shop.name,
    date: job.notice.startsAt,
    pay: job.notice.hourlyPay,
    status: job.status,
  }));

  return (
    <section>
      {appliedJobList.length !== 0 ? (
        <>
          <S.Title>신청 내역</S.Title>
          <TablePagination
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
    </section>
  );
};

export default AppliedJobListSection;

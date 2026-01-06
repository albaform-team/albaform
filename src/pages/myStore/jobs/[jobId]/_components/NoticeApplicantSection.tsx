import { isAxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';

import TablePagination, {
  Column,
} from '@/components/tablePagination/TablePagination';
import { useResponsiveColumns } from '@/hooks/useApplicantColumns';
import { usePagination } from '@/hooks/usePagination';
import { getShopNoticeApplications } from '@/lib/services/shopServise';
import { media } from '@/styles/media';
import { ShopNoticeApplicationsItem } from '@/types/api/shopNoticeApplications';

import { applicantListMapper, ApplicantRowVM } from '../_utils/mapper';

import ApplicantStatusCell from './ApplicantStatusCell';
import * as S from './NoticeApplicantSection.style';

interface Props {
  shopId: string;
  jobId: string;
  onClick: (
    message: string,
    paylod: {
      shopId: string;
      noticeId: string;
      applicationId: string;
      status: 'accepted' | 'rejected';
    }
  ) => void;
}

const key = {
  mobile: ['user', 'status'],
  tablet: ['user', 'Introduction', 'status'],
  desktop: ['user', 'Introduction', 'phone', 'status'],
} as const;

const NoticeApplicantSection = ({ shopId, jobId, onClick }: Props) => {
  const [appliedJobList, setAppliedJobList] = useState<
    ShopNoticeApplicationsItem[]
  >([]);
  const { page, setPage, limit, offset, meta, updateMeta } = usePagination({
    limit: 1,
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getShopNoticeApplications(
          shopId,
          jobId,
          offset,
          limit
        );
        setAppliedJobList(res.items as ShopNoticeApplicationsItem[]);
        updateMeta(res.count, res.hasNext, res.offset);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetch();
  }, [jobId, limit, offset, shopId, updateMeta, onClick]);

  const rows = useMemo(
    () => appliedJobList.map(applicantListMapper),
    [appliedJobList]
  );

  const allColumns = useMemo(
    () =>
      [
        {
          key: 'user',
          header: '신청자',
          render: (row: ApplicantRowVM) => row.user,
        },
        {
          key: 'Introduction',
          header: '소개',
          render: (row: ApplicantRowVM) => row.Introduction,
        },
        {
          key: 'phone',
          header: '전화번호',
          render: (row: ApplicantRowVM) => row.phone,
        },
        {
          key: 'status',
          header: '상태',
          render: ({ status }: ApplicantRowVM) => (
            <ApplicantStatusCell status={status} onClick={onClick} />
          ),
        },
      ] satisfies Column<ApplicantRowVM>[],
    [onClick]
  );

  const { columns, isTabletUp } = useResponsiveColumns(allColumns, key, media);

  return (
    <S.NoticeApplicantSection>
      <S.Title>신청자 목록</S.Title>
      <TablePagination
        paginationConfig={{
          count: meta.totalPage,
          visibleCount: isTabletUp ? 7 : 5,
        }}
        columns={columns}
        rows={rows}
        page={page}
        onChange={setPage}
        getRowId={row => row.status.applicationId}
      />
    </S.NoticeApplicantSection>
  );
};

export default NoticeApplicantSection;

import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { STORE_ROUTES } from '@/constants/routes';
import { GetUserApplications } from '@/lib/services/userService';
import { User } from '@/types/api/user';

import { AppliedJobListItem } from '../_utils/mapper';

import * as S from './AppliedJobListSection.style';
import EmptyStateSection from './EmptyStateSection';

interface Props {
  userId: string | null;
  userInfo: Required<User> | null;
}

const AppliedJobListSection = ({ userId, userInfo }: Props) => {
  const [appliedJobList, setAppliedJobList] = useState<AppliedJobListItem[]>(
    []
  );

  useEffect(() => {
    if (!userId) return;

    const fetchUserInfo = async () => {
      try {
        const appliedJobList = await GetUserApplications(userId, 0, 10);

        setAppliedJobList(appliedJobList as AppliedJobListItem[]);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (!userInfo) return;

  return (
    <>
      {appliedJobList.length !== 0 ? (
        <S.AppliedJobListLayout>
          <S.Title>신청 내역</S.Title>
          {appliedJobList.map(el => (
            <div key={el.id}>{el.id}</div>
          ))}
        </S.AppliedJobListLayout>
      ) : (
        <EmptyStateSection
          title="신청 내역"
          description="아직 신청 내역이 없어요."
          actionLabel="공고 보러가기"
          href={STORE_ROUTES.ROOT}
        />
      )}
    </>
  );
};

export default AppliedJobListSection;

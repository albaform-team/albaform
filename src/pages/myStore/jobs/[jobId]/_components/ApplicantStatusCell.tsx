import { getStatusLabel } from '@/pages/profile/[userId]/_utils/mapper';

import type { ApplicantRowVM } from '../_utils/mapper';

import * as S from './ApplicantStatusCell.style';

type Props = {
  status: ApplicantRowVM['status'];
  onClick: (
    message: string,
    paylod: {
      shopId: string;
      noticeId: string;
      applicationId: string;
      status: 'accepted' | 'rejected';
    }
  ) => void | Promise<void>;
};

const ApplicantStatusCell = ({ status, onClick }: Props) => {
  if (status.status !== 'pending') {
    return (
      <S.StatusTag status={status.status}>
        {getStatusLabel(status.status)}
      </S.StatusTag>
    );
  }

  return (
    <S.ActionButtonGroup>
      <S.ActionButton
        status="accepted"
        onClick={() =>
          onClick('신청을 승인하시겠어요?', {
            shopId: status.shopId,
            noticeId: status.noticeId,
            applicationId: status.applicationId,
            status: 'accepted',
          })
        }
      >
        승인하기
      </S.ActionButton>

      <S.ActionButton
        status="rejected"
        onClick={() =>
          onClick('신청을 거절하시겠어요?', {
            shopId: status.shopId,
            noticeId: status.noticeId,
            applicationId: status.applicationId,
            status: 'rejected',
          })
        }
      >
        거절하기
      </S.ActionButton>
    </S.ActionButtonGroup>
  );
};

export default ApplicantStatusCell;

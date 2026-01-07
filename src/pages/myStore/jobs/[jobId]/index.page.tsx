import { useRouter } from 'next/router';

import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import withAuthentication from '@/components/hoc/withAuthentication';
import {
  getShopNoticeDetail,
  updateJobApplicationStatus,
} from '@/lib/services/shopServise';
import useAuthStore from '@/stores/useAuthStore';
import { formatDateTimeRange } from '@/utils/date';

import NoticeApplicantSection from './_components/NoticeApplicantSection';
import ShopDetailSection from './_components/ShopDetailSection';
import StatusModal from './_components/StatusModal';
import { mapJobResponseToJob, NoticeDetail } from './_utils/mapper';
import { getPayIncreaseRate } from './_utils/number';
import * as S from './index.page.style';

export interface Payload {
  shopId: string;
  noticeId: string;
  applicationId: string;
  status: 'accepted' | 'rejected';
}
export interface ModalState {
  open: boolean;
  message: string;
  payload: Payload;
}

const JobDetailPage = () => {
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetail | null>(null);
  const [modalState, setModalState] = useState<ModalState>({
    open: false,
    message: '',
    payload: {
      shopId: '',
      noticeId: '',
      applicationId: '',
      status: 'rejected',
    },
  });
  const user = useAuthStore(s => s.user);
  const rehydrated = useAuthStore(s => s.rehydrated);
  const router = useRouter();
  const { jobId } = router.query;

  useEffect(() => {
    if (!rehydrated || typeof jobId !== 'string') return;
    const fetch = async () => {
      try {
        const res = await getShopNoticeDetail(
          user?.shop?.item.id as string,
          jobId
        );

        setNoticeDetail(mapJobResponseToJob(res));
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };
    fetch();
  }, [rehydrated, user?.shop?.item.id, jobId]);

  const handleOpen = async (
    message: string,
    payload: {
      shopId: string;
      noticeId: string;
      applicationId: string;
      status: 'accepted' | 'rejected';
    }
  ) => {
    setModalState({ open: true, message, payload });
  };

  const handleConfirm = async (payload: {
    shopId: string;
    noticeId: string;
    applicationId: string;
    status: 'accepted' | 'rejected';
  }) => {
    try {
      await updateJobApplicationStatus(
        payload.shopId,
        payload.noticeId,
        payload.applicationId,
        payload.status
      );
    } catch (e) {
      if (isAxiosError(e)) {
        alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
      }
    }

    setModalState({
      open: false,
      message: '',
      payload: {
        shopId: '',
        noticeId: '',
        applicationId: '',
        status: 'rejected',
      },
    });
  };

  const handleClose = () => {
    setModalState({
      open: false,
      message: '',
      payload: {
        shopId: '',
        noticeId: '',
        applicationId: '',
        status: 'rejected',
      },
    });
  };

  if (!noticeDetail) {
    return null;
  }

  return (
    <S.JobDetailLayout>
      <ShopDetailSection
        title={noticeDetail.shop.name}
        category={noticeDetail.shop.category}
        shopImageUrl={noticeDetail.shop.imageUrl}
        hourlyPay={noticeDetail.hourlyPay.toLocaleString()}
        payIncreaseAmount={getPayIncreaseRate(
          noticeDetail.hourlyPay,
          noticeDetail.shop.originalHourlyPay
        )}
        workTime={formatDateTimeRange(noticeDetail.startsAt, {
          durationHours: noticeDetail.workhour,
        })}
        address={noticeDetail.shop.address1}
        shopDescription={noticeDetail.shop.description}
        noticeDescription={noticeDetail.description}
        jobId={noticeDetail.id}
      />
      <NoticeApplicantSection
        shopId={noticeDetail.shop.id}
        jobId={noticeDetail.id}
        onClick={handleOpen}
      />
      <StatusModal
        modalState={modalState}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </S.JobDetailLayout>
  );
};

export default withAuthentication(JobDetailPage, {
  allowedTypes: ['employer'],
});

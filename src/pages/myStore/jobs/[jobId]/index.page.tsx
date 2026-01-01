import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import {
  getShopNoticeDetail,
  updateJobApplicationStatus,
} from '@/lib/services/shopServise';
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getShopNoticeDetail(
          '4490151c-5217-4157-b072-9c37b05bed47',
          '0d5dd6f0-5306-4060-8e92-11eff1e36bed'
        );

        setNoticeDetail(mapJobResponseToJob(res));
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };
    fetch();
  }, []);

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
          noticeDetail.hourlyPay + 110,
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

export default JobDetailPage;

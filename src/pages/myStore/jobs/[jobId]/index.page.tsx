import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { getShopNoticeDetail } from '@/lib/services/shopServise';
import { formatDateTimeRange } from '@/utils/date';

import NoticeApplicantSection from './_components/NoticeApplicantSection';
import ShopDetailSection from './_components/ShopDetailSection';
import { mapJobResponseToJob, NoticeDetail } from './_utils/mapper';
import { getPayIncreaseRate } from './_utils/number';
import * as S from './index.page.style';

const JobDetailPage = () => {
  const [noticeDetail, setNoticeDetail] = useState<NoticeDetail | null>(null);

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
      />
    </S.JobDetailLayout>
  );
};

export default JobDetailPage;

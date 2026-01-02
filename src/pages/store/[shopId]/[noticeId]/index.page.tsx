import Image from 'next/image';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import ArrowIcon from '@/assets/svg/arrow-up.svg';
import ClockIcon from '@/assets/svg/clock.svg';
import FoodImage from '@/assets/svg/food.png';
import LocationIcon from '@/assets/svg/location.svg';
import { getNoticeDetail } from '@/lib/services/noticeService';
import ListCard from '@/pages/store/_components/ListCard/ListCard';
import { NoticeItem } from '@/types/user/notice';

import CancelModal from '../../_components/Modal/CancelModal';
import ProfileRegisterModal from '../../_components/Modal/ProfileRegisterModal';

import * as S from './index.page.style';

const StoreDetailPage = () => {
  const router = useRouter();
  const { shopId, noticeId } = router.query;

  const [notice, setNotice] = useState<NoticeItem | null>(null);

  useEffect(() => {
    if (!shopId || !noticeId) return;

    const fetchNotice = async () => {
      try {
        if (typeof shopId === 'string' && typeof noticeId === 'string') {
          const data = await getNoticeDetail(shopId, noticeId);
          setNotice(data);
        }
      } catch (error) {
        console.error('공고 상세 불러오기 실패:', error);
      }
    };

    fetchNotice();
  }, [shopId, noticeId]);

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.DetailContainer>
      <S.JobSummarySection>
        <S.JobSummaryTitle>
          <S.SubTitle>{notice.shop.item.category}</S.SubTitle>
          <S.MainTitle>{notice.shop.item.name}</S.MainTitle>
        </S.JobSummaryTitle>
        <S.SummaryCardContainer>
          <S.SummaryCardImage>
            <Image
              src={notice.shop.item.imageUrl}
              alt="식당 이미지"
              width={311}
              height={177}
            />
          </S.SummaryCardImage>
          <S.SummaryCardInfo>
            <S.HourlyPay>시급</S.HourlyPay>
            <S.PayInfo>
              <S.Pay>{notice.hourlyPay.toLocaleString()}원</S.Pay>
              <S.PayIncrease>
                기존 시급보다 50%
                <S.ArrowIcon
                  src={ArrowIcon}
                  alt="증가"
                  width={16}
                  height={16}
                />
              </S.PayIncrease>
            </S.PayInfo>
            <S.InfoList>
              <Image src={ClockIcon} alt="근무 시간" width={16} height={16} />
              <S.WorkInfo>
                {notice.startsAt} ({notice.workhour}시간)
              </S.WorkInfo>
            </S.InfoList>
            <S.InfoList>
              <Image
                src={LocationIcon}
                alt="근무 위치"
                width={16}
                height={16}
              />
              <S.WorkInfo>{notice.shop.item.address1}</S.WorkInfo>
            </S.InfoList>
            <S.StoreDescription>{notice.description}</S.StoreDescription>
            <S.ApplyButton>신청하기</S.ApplyButton>
          </S.SummaryCardInfo>
        </S.SummaryCardContainer>
        <S.JobDescription>
          <S.JobTitle>공고 설명</S.JobTitle>
          <S.DetailJobDescription>
            {notice.shop.item.description}
          </S.DetailJobDescription>
        </S.JobDescription>
      </S.JobSummarySection>
      <S.RecentViewSection>
        <S.RecentViewTitle>최근에 본 공고</S.RecentViewTitle>
        <S.RecentViewList></S.RecentViewList>
      </S.RecentViewSection>
    </S.DetailContainer>
  );
};

export default StoreDetailPage;

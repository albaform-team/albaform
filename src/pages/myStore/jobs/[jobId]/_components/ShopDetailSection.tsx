import Image from 'next/image';

import ArrowIconComponent from '@/assets/svg/arrowicon';
import ClockIconComponent from '@/assets/svg/clockicon';
import Pin from '@/assets/svg/Pin';
import { MY_STORE_ROUTES } from '@/constants/routes';

import * as S from './ShopDetailSection.style';

interface Props {
  title: string;
  category: string;
  shopImageUrl: string;
  hourlyPay: string;
  payIncreaseAmount: number | null;
  workTime: string;
  address: string;
  shopDescription: string;
  noticeDescription: string;
  jobId: string;
}

const ShopDetailSection = ({
  title,
  category,
  shopImageUrl,
  hourlyPay,
  payIncreaseAmount,
  workTime,
  address,
  shopDescription,
  noticeDescription,
  jobId,
}: Props) => {
  return (
    <S.shopNoticeDetailSection>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
      <S.ShopNoticeCard>
        <S.ImgWrapper>
          <Image
            src={shopImageUrl}
            alt={`${title} 대표 이미지`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </S.ImgWrapper>
        <S.NoticeSummary>
          <S.NoticeWrapper>
            <div>
              <S.Highlight>시급</S.Highlight>
              <S.PayWrapper>
                {hourlyPay}원
                {payIncreaseAmount && (
                  <S.PayIncreaseAmountTag>
                    기존 시급보다 {payIncreaseAmount}% <ArrowIconComponent />
                  </S.PayIncreaseAmountTag>
                )}
              </S.PayWrapper>
            </div>
            <S.InfoItem>
              <S.IconBox>
                <ClockIconComponent />
              </S.IconBox>
              {workTime}
            </S.InfoItem>
            <S.InfoItem>
              <S.IconBox>
                <Pin />
              </S.IconBox>
              {address}
            </S.InfoItem>
            <S.ShopDescription>{shopDescription}</S.ShopDescription>
          </S.NoticeWrapper>
          <S.EditNoticeButton href={MY_STORE_ROUTES.JOBS.EDIT(jobId)}>
            공고 편집하기
          </S.EditNoticeButton>
        </S.NoticeSummary>
      </S.ShopNoticeCard>
      <S.NoticeDescription>
        <S.SubTitle>공고 설명</S.SubTitle>
        {noticeDescription}
      </S.NoticeDescription>
    </S.shopNoticeDetailSection>
  );
};

export default ShopDetailSection;

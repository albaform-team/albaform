import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';

import DefaultImage from '@/assets/png/DefaultImageSrc.png';
import * as S from '@/pages/store/_components/ListCard/ListCard.styles';
import { NoticeItem } from '@/types/user/notice';
import { formatDateTimeRange } from '@/utils/date';

type ListCardProps = {
  notice: NoticeItem;
};

const ListCard = ({ notice }: ListCardProps) => {
  const {
    hourlyPay,
    startsAt,
    workhour,
    closed,
    shop: {
      item: { name, address1, imageUrl, originalHourlyPay },
    },
  } = notice;

  const [image, setImage] = useState<string | StaticImageData>(imageUrl);

  const increaseRatePercent =
    Math.floor((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;

  const isIncrease = increaseRatePercent > 0;

  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.JobImage>
            <S.JobImageMedia>
              <Image
                src={image || DefaultImage}
                alt="가게 이미지"
                fill
                onError={e => {
                  setImage(DefaultImage);
                }}
              />
            </S.JobImageMedia>
            {closed && <S.ExpiredOverlay>마감 완료</S.ExpiredOverlay>}
          </S.JobImage>
          <S.JobSummary>
            <S.JobTitle isClosed={closed}>{name}</S.JobTitle>
            <S.JobMetaSection>
              <S.ClockIcon isClosed={closed} />
              <S.JobMetaInfo isClosed={closed}>
                {formatDateTimeRange(startsAt, {
                  durationHours: workhour,
                })}{' '}
              </S.JobMetaInfo>
            </S.JobMetaSection>
            <S.JobMetaSection>
              <S.NavIcon isClosed={closed} />
              <S.JobMetaInfo isClosed={closed}>{address1}</S.JobMetaInfo>
            </S.JobMetaSection>
          </S.JobSummary>
          <S.PaySection>
            <S.HourlyPay isClosed={closed}>
              {hourlyPay.toLocaleString('ko-KR')}원
            </S.HourlyPay>
            {isIncrease && (
              <S.PayIncreaseBadgeSection isClosed={closed}>
                <S.PayIncreaseBadge isClosed={closed}>
                  기존 시급보다 {increaseRatePercent}%️️
                </S.PayIncreaseBadge>
                <S.ArrowIcon />
              </S.PayIncreaseBadgeSection>
            )}
          </S.PaySection>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};

export default ListCard;

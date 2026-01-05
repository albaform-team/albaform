import Image from 'next/image';

import ArrowIcon from '@/assets/svg/arrow-up.svg';
// import ClockIcon from '@/assets/svg/clock.svg';
import ClockIconComponent from '@/assets/svg/clockicon';
import LocationIcon from '@/assets/svg/location.svg';
import * as S from '@/pages/store/_components/ListCard/ListCard.styles';

import { NoticeItem } from './types/mockNotices';

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

  const formatDateWithWorkTime = (startsAt: string, workhour: number) => {
    const date = new Date(startsAt);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const startHour = date.getUTCHours();
    const startMinute = date.getUTCMinutes();

    const endHour = startHour + workhour;
    const endMinute = startMinute;

    const pad = (n: number) => String(n).padStart(2, '0');

    return `${year}.${month}.${day} ${pad(startHour)}:${pad(
      startMinute
    )} ~ ${pad(endHour)}:${pad(endMinute)} (${workhour}시간)`;
  };

  const increaseRatePercent =
    Math.floor((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;

  const isIncrease = increaseRatePercent > 0;

  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.JobImage>
            <S.JobImageMedia>
              <Image src={imageUrl} alt="가게 이미지" fill />
            </S.JobImageMedia>
            {closed && <S.ExpiredOverlay>지난 공고</S.ExpiredOverlay>}
          </S.JobImage>
          <S.JobSummary>
            <S.JobTitle isClosed={closed}>{name}</S.JobTitle>
            <S.JobMetaSection>
              <S.ClockIcon isClosed={closed} />
              {/* <S.JobMetaIcon
                src={ClockIcon}
                alt="근무 시간"
                width={16}
                height={16}
              /> */}
              <S.JobMetaInfo isClosed={closed}>
                {formatDateWithWorkTime(startsAt, workhour)}{' '}
              </S.JobMetaInfo>
            </S.JobMetaSection>
            <S.JobMetaSection>
              <S.NavIcon isClosed={closed} />
              {/* <S.JobMetaIcon
                src={LocationIcon}
                alt="근무 장소"
                width={16}
                height={16}
              /> */}
              <S.JobMetaInfo isClosed={closed}>{address1}</S.JobMetaInfo>
            </S.JobMetaSection>
          </S.JobSummary>
          <S.PaySection>
            <S.HourlyPay isClosed={closed}>{hourlyPay}원</S.HourlyPay>
            {isIncrease && (
              <S.PayIncreaseBadgeSection isClosed={closed}>
                <S.PayIncreaseBadge isClosed={closed}>
                  기존 시급보다 {increaseRatePercent}%️️
                </S.PayIncreaseBadge>
                <S.ArrowIcon />
                {/* <S.JobMetaIcon
                  src={ArrowIcon}
                  alt="상승"
                  width={16}
                  height={16}
                /> */}
              </S.PayIncreaseBadgeSection>
            )}
          </S.PaySection>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};

export default ListCard;

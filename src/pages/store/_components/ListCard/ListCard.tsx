import Image from 'next/image';

import ArrowIcon from '@/assets/svg/ListCard/arrow-up.svg';
import ClockIcon from '@/assets/svg/ListCard/clock.svg';
import FoodImage from '@/assets/svg/ListCard/food.png';
import LocationIcon from '@/assets/svg/ListCard/location.svg';
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
      item: { name, address1, imageUrl },
    },
  } = notice;

  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.JobImage>
            <S.JobImageMedia>
              <Image src={FoodImage} alt="가게 이미지" fill />
            </S.JobImageMedia>
            {closed && <S.ExpiredOverlay>지난 공고</S.ExpiredOverlay>}
          </S.JobImage>
          <S.JobSummary>
            <S.JobTitle isClosed={closed}>{name}</S.JobTitle>
            <S.JobMetaSection>
              <S.JobMetaIcon
                src={ClockIcon}
                alt="근무 시간"
                width={16}
                height={16}
              />
              <S.JobMetaInfo isClosed={closed}>
                {startsAt} 15:00~18:00 ({workhour}시간)
              </S.JobMetaInfo>
            </S.JobMetaSection>
            <S.JobMetaSection>
              <S.JobMetaIcon
                src={LocationIcon}
                alt="근무 장소"
                width={16}
                height={16}
              />
              <S.JobMetaInfo isClosed={closed}>{address1}</S.JobMetaInfo>
            </S.JobMetaSection>
          </S.JobSummary>
          <S.PaySection>
            <S.HourlyPay isClosed={closed}>{hourlyPay}원</S.HourlyPay>
            <S.PayIncreaseBadgeSection isClosed={closed}>
              <S.PayIncreaseBadge isClosed={closed}>
                기존 시급보다 100%️️
              </S.PayIncreaseBadge>
              <S.JobMetaIcon
                src={ArrowIcon}
                alt="근무 장소"
                width={16}
                height={16}
              />
            </S.PayIncreaseBadgeSection>
          </S.PaySection>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};

export default ListCard;

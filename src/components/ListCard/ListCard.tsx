import Image from 'next/image';

import ArrowIcon from '@/assets/svg/ListCard/arrow-up.svg';
import ClockIcon from '@/assets/svg/ListCard/clock.svg';
import FoodImage from '@/assets/svg/ListCard/food.png';
import LocationIcon from '@/assets/svg/ListCard/location.svg';
import * as S from '@/components/ListCard/ListCard.styles';

const ListCard = () => {
  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.JobImage>
            <Image src={FoodImage} alt="음식" fill />
          </S.JobImage>
          <S.JobSummary>
            <S.JobTitle>도토리 식당</S.JobTitle>
            <S.JobMetaSection>
              <S.JobMetaIcon
                src={ClockIcon}
                alt="근무 시간"
                width={16}
                height={16}
              />
              <S.JobMetaInfo>2026-01-02 15:00~18:00 (3시간)</S.JobMetaInfo>
            </S.JobMetaSection>
            <S.JobMetaSection>
              <S.JobMetaIcon
                src={LocationIcon}
                alt="근무 장소"
                width={16}
                height={16}
              />
              <S.JobMetaInfo>서울시 송파구</S.JobMetaInfo>
            </S.JobMetaSection>
          </S.JobSummary>
          <S.PaySection>
            <S.HourlyPay>15,000원</S.HourlyPay>
            <S.PayIncreaseBadgeSection>
              <S.PayIncreaseBadge>기존 시급보다 100%️️</S.PayIncreaseBadge>
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

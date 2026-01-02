import Image from 'next/image';

import ArrowIcon from '@/assets/svg/ListCard/arrow-up.svg';
import ClockIcon from '@/assets/svg/ListCard/clock.svg';
import FoodImage from '@/assets/svg/ListCard/food.png';
import LocationIcon from '@/assets/svg/ListCard/location.svg';
import * as S from '@/pages/store/[id]/index.page.style';

const StoreDetailPage = () => {
  return (
    <S.DetailContainer>
      <S.JobSummarySection>
        <S.JobSummaryTitle>
          <S.SubTitle>식당</S.SubTitle>
          <S.MainTitle>도토리 식당</S.MainTitle>
        </S.JobSummaryTitle>
        <S.SummaryCardContainer>
          <S.SummaryCardImage>
            <Image src={FoodImage} alt="식당 이미지" width={311} height={177} />
          </S.SummaryCardImage>
          <S.SummaryCardInfo>
            <S.HourlyPay>시급</S.HourlyPay>
            <S.PayInfo>
              <S.Pay>15,000원</S.Pay>
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
              <S.WorkInfo>2023-01-02 15:00~18:00 (3시간)</S.WorkInfo>
            </S.InfoList>
            <S.InfoList>
              <Image
                src={LocationIcon}
                alt="근무 위치"
                width={16}
                height={16}
              />
              <S.WorkInfo>서울시 송파구</S.WorkInfo>
            </S.InfoList>
            <S.StoreDescription>
              알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서
              쉬운 편에 속하는 가게입니다.
            </S.StoreDescription>
            <S.ApplyButton>신청하기</S.ApplyButton>
          </S.SummaryCardInfo>
        </S.SummaryCardContainer>
        <S.JobDescription>
          <S.JobTitle>공고 설명</S.JobTitle>
          <S.DetailJobDescription>
            기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가
            비네요. 급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.
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

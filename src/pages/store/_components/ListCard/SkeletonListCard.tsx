import styled from '@emotion/styled';

import * as S from '@/pages/store/_components/ListCard/ListCard.styles';

const SkeletonBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
`;

type SkeletonListCardProps = {
  count?: number;
};

const SkeletonListCard = ({ count = 6 }: SkeletonListCardProps) => {
  const skeletonCards = [];

  for (let i = 0; i < count; i++) {
    skeletonCards.push(
      <S.CardContainer key={i}>
        <S.CardContent>
          <S.JobImage>
            <SkeletonBlock />
          </S.JobImage>

          <S.JobSummary>
            <S.JobMetaSection>
              <SkeletonBlock />
            </S.JobMetaSection>
            <S.JobMetaSection>
              <SkeletonBlock />
            </S.JobMetaSection>
          </S.JobSummary>

          <S.PaySection>
            <SkeletonBlock />
          </S.PaySection>
        </S.CardContent>
      </S.CardContainer>
    );
  }

  return <>{skeletonCards}</>;
};

export default SkeletonListCard;

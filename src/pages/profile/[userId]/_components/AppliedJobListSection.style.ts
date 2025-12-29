import styled from '@emotion/styled';

import { media } from '@/styles/media';

export const AppliedJobListLayout = styled.section`
  @media ${media.desktop} {
    display: flex;
    gap: 180px;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;

  @media ${media.tablet} {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const AppliedJobListSection = styled.section`
  width: 100%;
  background-color: ${colors.gray[5]};

  @media ${media.tablet} {
    width: 680px;
  }

  @media ${media.desktop} {
    width: 964px;
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

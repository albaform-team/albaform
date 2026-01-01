import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const JobDetailLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 180px);
  padding: 40px 12px;
  margin: 0 auto;
  background-color: ${colors.gray[5]};

  /* @media ${media.tablet} {
    gap: 120px;
    width: 680px;
    padding: 60px 0;
  }
  @media ${media.desktop} {
    width: 964px;
  } */
`;

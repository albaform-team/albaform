import styled from '@emotion/styled';

import { media } from '@/styles/media';

export const ProfileLayout = styled.main`
  min-height: calc(100vh - 180px);
  padding: 40px 12px 80px;
  margin: 0 auto;

  @media ${media.tablet} {
    width: 680px;
    padding: 60px 0;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

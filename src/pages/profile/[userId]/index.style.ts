import styled from '@emotion/styled';

import { media } from '@/styles/media';

export const ProfileLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 80px;
  min-height: calc(100vh - 180px);
  padding: 40px 12px 80px;
  margin: 0 auto;

  @media ${media.tablet} {
    gap: 120px;
    width: 680px;
    padding: 60px 0;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

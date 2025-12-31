import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const ProfileLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 180px);
  margin: 0 auto;
`;

export const ProfileWrapper = styled.div`
  padding: 40px 12px;
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

export const AppliedJobListWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 12px 80px;
  background-color: ${colors.gray[5]};

  @media ${media.tablet} {
    padding: 60px 0;
  }

  @media ${media.desktop} {
    padding-bottom: 120px;
  }
`;

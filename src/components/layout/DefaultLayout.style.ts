import styled from '@emotion/styled';

import { media } from '@/styles/media';

export const Main = styled.main`
  min-height: calc(100vh - 202px);

  @media ${media.tablet} {
    min-height: calc(100vh - 170px);
  }
`;

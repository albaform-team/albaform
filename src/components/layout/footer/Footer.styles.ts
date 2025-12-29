import Image from 'next/image';

import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 744,
  MOBILE: 375,
};

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 0 32px;
  margin-top: 10px;
  background-color: #f2f2f3;
`;

export const FooterContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 964px;
  color: #7d7986;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    width: 680px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    display: grid;
    grid-template: auto auto / 1fr auto;
    grid-template-areas:
      'links social'
      'copyright copyright';
    row-gap: 12px;
    width: 335px;
  }
`;

export const FooterCopyright = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-area: copyright;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const FooterLinks = styled.footer`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-area: links;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const FooterSocial = styled.footer`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-area: social;
  }
`;

export const SocialIcon = styled(Image)`
  cursor: pointer;
`;

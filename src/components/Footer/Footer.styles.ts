import Image from 'next/image';

import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 744,
  MOBILE: 375,
};

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 0 32px;
  background-color: #f2f2f3;
  margin-top: 10px;
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
    width: 335px;
    grid-template: auto auto / 1fr auto;
    grid-template-areas:
      'links social'
      'copyright copyright';
    row-gap: 12px;
  }
`;

export const FooterCopyright = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    font-size: 12px;
    line-height: 16px;
    grid-area: copyright;
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
    font-size: 14px;
    line-height: 22px;
    grid-area: links;
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

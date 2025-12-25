import Image from 'next/image';

import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #f2f2f3;
`;

export const FooterContents = styled.div`
  display: flex;
  gap: 287px;
  align-items: center;
  justify-content: center;
  color: #7d7986;
`;

export const FooterCopyright = styled.div`
  display: flex;
`;

export const FooterLinks = styled.footer`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const FooterSocial = styled.footer`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled(Image)`
  cursor: pointer;
`;

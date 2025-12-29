import Image from 'next/image';
import Link from 'next/link';

import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 889,
  MOBILE: 375,
};

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    height: 102px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 10px;

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    gap: 24px;
    width: 100%;
    margin: 0 32px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin: 0 20px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-column: 1 / 2;
    gap: 0;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  flex-shrink: 0;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    width: 84px;
    height: 30px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 450px;
  height: 40px;
  padding: 10px;
  background-color: #f2f2f3;
  border-radius: 10px;

  input {
    width: 100%;
    font-size: 14px;
    color: #a4a1aa;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    width: 344px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    width: 100%;
    height: 36px;
    padding: 8px;
  }
`;

export const HeaderRight = styled.div`
  position: relative;
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    gap: 16px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    flex-shrink: 0;
    gap: 16px;
  }
`;

export const Button = styled(Link)`
  width: 63px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #111322;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    width: auto;
    font-size: 14px;
    line-height: 100%;
  }
`;

export const NotificationButton = styled.div`
  cursor: pointer;
`;

export const NotificationOverlay = styled.div`

  /* 모바일 */
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  @media (width >= 744px) {
    position: absolute;
    inset: auto;
    top: 100%;
    right: 0;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

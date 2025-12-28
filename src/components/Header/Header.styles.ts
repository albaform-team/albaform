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
    gap: 12px;
    margin: 0 20px;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    gap: 0;
    grid-column: 1 / 2;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
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
  border-radius: 10px;
  background-color: #f2f2f3;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #a4a1aa;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    width: 344px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    width: 100%;
    height: 36px;
    padding: 8px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
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
    gap: 16px;
    flex-shrink: 0;
  }
`;

export const Button = styled(Link)`
  width: 63px;
  color: #111322;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;

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
  z-index: 1000;

  /* 모바일 */
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: stretch;
  align-items: stretch;

  @media (min-width: 744px) {
    position: absolute;
    inset: auto;
    top: 100%;
    right: 0;

    justify-content: flex-end;
    align-items: flex-start;
  }
`;

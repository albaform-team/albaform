/* stylelint-disable nesting-selector-no-missing-scoping-root */
import Link from 'next/link';

import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 744,
  DESKTOP: 1024,
};

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 375px;
  height: 100vh;
  padding: 40px 20px;
  background-color: #ffebe7;

  @media (width >= 1024px) {
    width: 368px;
    height: 419px;
    border: 1px solid #cbc9cf;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgb(120 116 134 / 25%);
  }

  @media (width >= 744px) {
    width: 368px;
    height: 419px;
    border: 1px solid #cbc9cf;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgb(120 116 134 / 25%);
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationTitle = styled.div`
  color: #111322;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
`;

export const CloseButton = styled(Link)`
  cursor: pointer;
`;

export const NotificationList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgb(0 0 0 / 15%) transparent;
`;

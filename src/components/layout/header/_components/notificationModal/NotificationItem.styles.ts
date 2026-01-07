import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { AlertResult } from '@/types/api/alerts';

export const NotificationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  width: 323px;
  height: 105px;
  padding: 16px 12px;
  background-color: #fff;
  border: 1px solid #e5e4e7;
  border-radius: 5px;

  @media (width >= 1024px) {
    width: 315px;
    height: 105px;
  }

  @media (width >= 744px) {
    width: 315px;
    height: 105px;
  }
`;

export const NotificationMessage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #111322;
`;

const statusStyle = {
  accepted: css`
    color: ${colors.blue[20]};
  `,
  rejected: css`
    color: #ea3c12;
  `,
};

export const NotificationMessageAlarm = styled.span<{ result: AlertResult }>`
  ${({ result }) => statusStyle[result]}
`;

export const NotificationTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #a4a1aa;
`;

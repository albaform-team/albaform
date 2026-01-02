import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { ApplicationStatus } from '@/types/api/shopNoticeApplications';

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  width: fit-content;

  @media ${media.tablet} {
    gap: 12px;
  }
`;

const statusStyle = {
  accepted: css`
    color: ${colors.blue[20]};
    border: 1px solid ${colors.blue[20]};
  `,
  rejected: css`
    color: #ea3c12;
    border: 1px solid #ea3c12;
  `,
};

export const ActionButton = styled.button<{
  status: 'accepted' | 'rejected';
}>`
  height: fit-content;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  border-radius: 6px;

  ${({ status }) => statusStyle[status]}
`;

export const StatusTag = styled.div<{ status: ApplicationStatus }>`
  width: fit-content;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  color: ${({ status }) => {
    switch (status) {
      case 'accepted':
        return colors.blue[20];
      case 'rejected':
        return colors.red[40];
      default:
        return '#5F6368';
    }
  }};
  text-align: center;
  background-color: ${({ status }) => {
    switch (status) {
      case 'accepted':
        return colors.blue[10];
      case 'rejected':
        return colors.red[10];
      default:
        return '#F2F4F6';
    }
  }};
  border-radius: 12px;
`;

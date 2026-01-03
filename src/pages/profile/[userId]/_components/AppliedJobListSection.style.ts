import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { ApplicationStatus } from '@/types/api/userAppliedJobList';

export const AppliedJobListSection = styled.section`
  width: 100%;
  background-color: ${colors.gray[5]};

  @media ${media.tablet} {
    width: 680px;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;

  @media ${media.tablet} {
    margin-bottom: 24px;
    font-size: 28px;
  }
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
      case 'pending':
        return colors.green[20];
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
      case 'pending':
        return colors.green[10];
      default:
        return '#F2F4F6';
    }
  }};
  border-radius: 12px;
`;

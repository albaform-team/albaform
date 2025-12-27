import Image from 'next/image';

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const CardContainer = styled.div`
  width: 171px;
  height: 260px;
  padding: 12px;
  cursor: pointer;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[20]};
  border-radius: 12px;

  @media ${media.tablet} {
    width: 312px;
    height: 348px;
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${media.tablet} {
    gap: 20px;
  }
`;

export const JobImage = styled.div`
  position: relative;
  width: 147px;
  height: 84px;
  overflow: hidden;
  background-color: black;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 280px;
    height: 160px;
  }
`;

export const JobSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const JobTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 20px;
    line-height: 100%;
  }
`;

export const JobMetaSection = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-start;
  width: 147px;

  @media ${media.tablet} {
    width: 280px;
  }
`;

export const JobMetaIcon = styled(Image)`
  @media ${media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const JobMetaInfo = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${colors.gray[50]};

  @media ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const PaySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: flex-start;

  @media ${media.tablet} {
    flex-direction: row;
    gap: 9px;
    align-items: center;
  }
`;

export const HourlyPay = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 24px;
  }
`;

export const PayIncreaseBadge = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${colors.red[40]};

  @media ${media.tablet} {
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
    color: ${colors.white};
  }
`;

export const PayIncreaseBadgeSection = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;

  @media ${media.tablet} {
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
    color: ${colors.white};
    background-color: ${colors.red[40]};
    border-radius: 20px;
  }
`;

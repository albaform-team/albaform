import Image from 'next/image';

import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  padding: 40px 12px;

  @media ${media.tablet} {
    gap: 120px;
  }
`;

export const JobSummarySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${media.tablet} {
    gap: 24px;
  }
`;

export const JobSummaryTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
    line-height: 100%;
  }
`;

export const SummaryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 351px;
  padding: 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[20]};
  border-radius: 12px;

  @media ${media.tablet} {
    width: 680px;
    padding: 24px;
  }

  @media ${media.desktop} {
    flex-direction: row;
    gap: 30px;
    width: 963px;
  }
`;

export const SummaryCardImage = styled.div`
  width: 311px;
  height: 177px;
  overflow: hidden;
  background-color: black;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 632px;
    height: 360px;
  }

  @media ${media.desktop} {
    width: 539px;
    height: 308px;
  }
`;

export const SummaryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media ${media.tablet} {
    gap: 12px;
  }

  @media ${media.desktop} {
    gap: 14px;
    justify-content: center;
    width: 346px;
  }
`;

export const HourlyPay = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const PayInfo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;

  @media ${media.tablet} {
    gap: 8px;
  }
`;

export const Pay = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const PayIncrease = styled.div`
  display: flex;
  gap: 2px;
  width: 131px;
  height: 24px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${colors.white};
  background-color: #ea3c12;
  border-radius: 20px;

  @media ${media.tablet} {
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 36px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 100%;
  }
`;

export const ArrowIcon = styled(Image)`
  @media ${media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const InfoList = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: flex-start;

  @media ${media.tablet} {
    gap: 6px;
  }
`;

export const WorkInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.gray[50]};

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StoreDescription = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const ApplyButton = styled(Button)`
  width: 100%;
  height: 38px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.white};
  background-color: #ea3c12;
  border-radius: 6px;

  @media ${media.tablet} {
    height: 48px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 351px;
  padding: 20px;
  background-color: ${colors.gray[10]};
  border-radius: 12px;

  @media ${media.tablet} {
    width: 680px;
    padding: 32px;
  }

  @media ${media.desktop} {
    width: 963px;
    padding: 32px;
  }
`;

export const JobTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const DetailJobDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const RecentViewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media ${media.tablet} {
    gap: 32px;
  }
`;

export const RecentViewTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
    line-height: 100%;
  }
`;

export const RecentViewList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media ${media.tablet} {
    gap: 14px;
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

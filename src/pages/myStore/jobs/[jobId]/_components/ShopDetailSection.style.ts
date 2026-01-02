import Link from 'next/link';

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const shopNoticeDetailSection = styled.section`
  margin: 0 auto;

  @media ${media.tablet} {
    gap: 120px;
    width: 680px;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

export const Category = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #ea3c12;

  @media ${media.tablet} {
    font-size: 16px;
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

export const ShopNoticeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  margin-bottom: 12px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[20]};
  border-radius: 8px;

  @media ${media.tablet} {
    gap: 16px;
    padding: 24px;
    margin-bottom: 24px;
  }

  @media ${media.desktop} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 311px;
  height: 177px;
  overflow: hidden;
  border-radius: 8px;

  @media ${media.tablet} {
    width: 632px;
    height: 360px;
  }

  @media ${media.desktop} {
    width: 539px;
    height: 308px;
  }
`;

export const NoticeSummary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  @media ${media.desktop} {
    justify-content: space-between;
  }
`;

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${media.tablet} {
    gap: 12px;
  }
`;

export const Highlight = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const PayWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const PayIncreaseAmountTag = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.white};
  word-break: normal;
  background-color: #ea3c12;
  border-radius: 99px;

  svg {
    margin-bottom: 1px;
  }

  @media ${media.tablet} {
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray[50]};

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const IconBox = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${colors.red[30]};

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ShopDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const EditNoticeButton = styled(Link)`
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;
  text-align: center;
  border: 1px solid #ea3c12;
  border-radius: 8px;

  @media ${media.tablet} {
    padding: 15px 0;
    font-size: 16px;
  }
`;

export const NoticeDescription = styled.div`
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${colors.gray[10]};
  border-radius: 8px;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

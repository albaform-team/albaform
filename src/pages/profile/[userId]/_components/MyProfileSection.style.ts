import Link from 'next/link';

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const MyProfileLayout = styled.section`
  @media ${media.desktop} {
    display: flex;
    gap: 180px;
    justify-content: space-between;
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

export const ProfileCard = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  background: ${colors.red[10]};
  border-radius: 8px;

  @media ${media.tablet} {
    gap: 24px;
    padding: 32px;
    font-size: 16px;
  }
`;

export const NameLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: #ea3c12;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  list-style: none;

  @media ${media.tablet} {
    gap: 12px;
    margin-bottom: 28px;
  }
`;

export const InfoItem = styled.li`
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

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Bio = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #2b2b2b;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const EditButton = styled(Link)`
  width: 108px;
  padding: 7px 0;
  font-size: 14px;
  font-weight: 700;
  color: #ea3c12;
  text-align: center;
  background-color: ${colors.white};
  border: 1px solid #ea3c12;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.red[10]};
  }

  @media ${media.tablet} {
    width: 169px;
    padding: 11px 0;
    font-size: 16px;
  }
`;

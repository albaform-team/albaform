import Link from 'next/link';

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 60px 24px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${colors.gray[20]};
  border-radius: 8px;

  @media ${media.tablet} {
    gap: 24px;
    font-size: 16px;
  }
`;

export const Description = styled.div`
  text-align: center;
  word-break: keep-all;
`;

export const ActionButton = styled(Link)`
  width: 150px;
  padding: 10px 20px;
  font-weight: 500;
  color: ${colors.white};
  text-align: center;
  background-color: #ea3c12;
  border-radius: 8px;

  @media ${media.tablet} {
    width: 346px;
    padding: 11.5px 0;
  }
`;

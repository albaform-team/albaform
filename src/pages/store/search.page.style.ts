import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 40px;

  @media ${media.tablet} {
    gap: 35px;
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 351px;

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 678px;
  }

  @media ${media.desktop} {
    width: 964px;
  }
`;

export const SearchTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const SearchQuery = styled.span`
  color: #ea3c12;
`;

export const JobFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const JobSearchSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media ${media.tablet} {
    gap: 40px;
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

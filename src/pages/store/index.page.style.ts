import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const JobSuggestSection = styled.div`
  width: 100%;
  height: 381px;
  padding: 40px 0;
  background-color: ${colors.red[10]};

  @media ${media.tablet} {
    height: 555px;
    padding: 60px 0 35px;
  }

  @media ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const JobSuggestTitle = styled.div`
  padding: 0 0 16px 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    padding: 0 0 15px 32px;
    font-size: 28px;
    font-weight: 700;
    line-height: 100%;
  }
`;

export const JobSuggestList = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  padding: 12px 12px 24px;
  overflow: scroll;
  overflow-y: visible;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${media.tablet} {
    gap: 14px;
    padding: 20px 32px 32px;
  }

  @media ${media.desktop} {
    width: 1000px;
  }
`;

// 전체 공고
export const AllJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 40px 0 80px;

  @media ${media.tablet} {
    gap: 32px;
    padding: 60px 0;
  }
`;

export const JobListHeader = styled.div`
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

export const JobListTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};

  @media ${media.tablet} {
    font-size: 28px;
  }
`;

export const JobFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const AllJobListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 29px;
`;

export const AllJobList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media ${media.tablet} {
    gap: 50px;
  }

  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

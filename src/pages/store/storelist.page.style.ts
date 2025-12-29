import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const JobSuggestSection = styled.div`
  width: 100%;
  height: 381px;
  padding: 40px 0;
  background-color: ${colors.red[10]};
`;

export const JobSuggestTitle = styled.div`
  margin: 0 0 16px 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};
`;

export const JobSuggestList = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AllJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 40px 0 80px;
`;

export const JobListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 351px;
`;

export const JobListTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.black};
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
  gap: 29px;
  justify-content: center;
  padding-bottom: 29px;
`;

export const AllJobList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

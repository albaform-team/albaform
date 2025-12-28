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

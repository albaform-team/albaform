import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PageText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.gray[30]};
`;

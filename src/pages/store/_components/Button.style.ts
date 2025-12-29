import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import { colors } from '@/styles/colors';

export const BoxContainer = styled(Button)`
  width: 79px;
  height: 30px;
  padding: 6.5px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  color: ${colors.white};
  background-color: ${colors.red[30]};
  border-radius: 5px;
  box-shadow: none;
`;

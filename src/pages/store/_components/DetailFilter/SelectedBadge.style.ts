import styled from '@emotion/styled';
import { Chip } from '@mui/material';

import { colors } from '@/styles/colors';

export const BadgeContainer = styled(Chip)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 6px 10px;
  background-color: ${colors.red[10]};
  border-radius: 20px;
`;

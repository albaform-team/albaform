import styled from '@emotion/styled';
import { PaginationItem, Stack } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const FixedPaginationWrapper = styled(Stack)`
  padding: 12px 0;

  & .MuiPaginationItem-ellipsis {
    display: none;
  }
`;

export const TablePaginationItem = styled(PaginationItem)`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};

  &.Mui-selected {
    color: ${colors.white};
    background-color: ${colors.red[30]};

    &:hover {
      background-color: ${colors.red[30]};
    }
  }

  &:hover {
    background-color: ${colors.red[10]};
  }

  @media ${media.tablet} {
    font-size: 14px;
  }
`;

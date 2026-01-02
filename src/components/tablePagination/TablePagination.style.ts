import styled from '@emotion/styled';
import { TableCell, TableHead, TableRow } from '@mui/material';

import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

export const TablePaginationWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[20]};
  border-radius: 8px;
`;

export const TableHeader = styled(TableHead)`
  height: 40px;
  background-color: ${colors.red[10]};

  @media ${media.tablet} {
    height: 50px;
  }
`;

export const TableRowWrapper = styled(TableRow)`
  tbody > & {
    height: 46px;

    @media ${media.tablet} {
      height: 69px;
    }
  }
`;

export const TableCellWrapper = styled(TableCell)`
  padding: 0 8px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 12px;
  line-height: 26px;

  tbody & {
    font-size: 14px;
    border-left: 1px solid ${colors.gray[20]};

    @media ${media.tablet} {
      font-size: 16px;
      border-left: none;
    }
  }

  @media ${media.tablet} {
    padding: 0 12px;
    font-size: 14px;
  }
`;

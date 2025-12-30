import { Table, TableBody, TableContainer } from '@mui/material';
import { ReactNode, useState } from 'react';

import FixedPagination from '../fixedPagination/FixedPagination';

import * as S from './TablePagination.style';

export type Column<Row> = {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  render: (row: Row) => ReactNode;
};

interface Props<Row> {
  columns: Column<Row>[];
  paginationConfig: {
    count: number;
    visibleCount: number;
  };
  rows: Row[];
  getRowId: (row: Row) => string;
}

const TablePagination = <Row,>({
  columns,
  rows,
  getRowId,
  paginationConfig,
}: Props<Row>) => {
  const [page, setPage] = useState(1);

  return (
    <S.TablePaginationWapper>
      <TableContainer>
        <Table sx={{ minWidth: 320 }} aria-label="custom pagination table">
          <S.TableHeader>
            <S.TableRowWrapper>
              {columns.map(col => (
                <S.TableCellWrapper key={col.key} align={col.align}>
                  {col.header}
                </S.TableCellWrapper>
              ))}
            </S.TableRowWrapper>
          </S.TableHeader>
          <TableBody>
            {rows.map(row => (
              <S.TableRowWrapper key={getRowId(row)}>
                {columns.map(col => (
                  <S.TableCellWrapper key={col.key} align={col.align}>
                    {col.render(row)}
                  </S.TableCellWrapper>
                ))}
              </S.TableRowWrapper>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FixedPagination page={page} {...paginationConfig} onChange={setPage} />
    </S.TablePaginationWapper>
  );
};

export default TablePagination;

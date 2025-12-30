import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

export type Column<Row> = {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  render: (row: Row) => ReactNode;
};

interface Props<Row> {
  columns: Column<Row>[];
  rows: Row[];
  getRowId: (row: Row) => string;
}

const TablePagination = <Row,>({ columns, rows, getRowId }: Props<Row>) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col.key} align={col.align}>
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map(row => (
              <TableRow key={getRowId(row)}>
                {columns.map(col => (
                  <TableCell key={col.key} align={col.align}>
                    {' '}
                    {col.render(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} shape="rounded" />
    </div>
  );
};

export default TablePagination;

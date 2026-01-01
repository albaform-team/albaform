import Pagination from '@mui/material/Pagination';
import * as React from 'react';

export default function PaginationRounded() {
  const [page, setPage] = React.useState(1);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      count={7}
      page={page}
      onChange={handleChange}
      shape="rounded"
      sx={{
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#FF8D72',
          color: '#fff',
        },
      }}
    />
  );
}

import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { colors } from '@/styles/colors';

type Props = {
  page: number;
  onChange: (page: number) => void;
  totalCount: number;
  limit: number;
};

const PaginationRounded = ({ page, onChange, totalCount, limit }: Props) => {
  return (
    <Pagination
      page={page}
      count={Math.ceil(totalCount / limit)}
      onChange={(_, value) => onChange(value)}
      shape="rounded"
      siblingCount={3}
      boundaryCount={0}
      renderItem={item => {
        if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
          return null;
        }

        return <PaginationItem {...item} />;
      }}
      sx={{
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: `${colors.red[30]}`,
          color: '#fff',
        },
        '& .MuiPaginationItem-root.Mui-selected:hover': {
          backgroundColor: '#f7795c',
        },
      }}
    />
  );
};

export default PaginationRounded;

import Pagination from '@mui/material/Pagination';

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
    />
  );
};

export default PaginationRounded;

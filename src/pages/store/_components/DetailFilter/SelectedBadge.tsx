import Chip from '@mui/material/Chip';

import * as S from '@/pages/store/_components/DetailFilter/SelectedBadge.style';

const AreaSelectedBadge = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return <S.BadgeContainer label="Deletable" onDelete={handleDelete} />;
};

export default AreaSelectedBadge;

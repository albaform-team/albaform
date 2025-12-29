import { Radio, RadioProps } from '@mui/material';

import CheckedCircle from '@/assets/svg/CheckedCircle';
import Circle from '@/assets/svg/Circle';

const UserRadio = (props: RadioProps) => {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<CheckedCircle />}
      icon={<Circle />}
      {...props}
    />
  );
};

export default UserRadio;

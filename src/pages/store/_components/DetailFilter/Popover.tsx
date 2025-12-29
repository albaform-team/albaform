import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/store/_components/DetailFilter/Popover.style';

import OptionSection from './OptionSection';

const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <S.FilterButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        상세 필터{' '}
      </S.FilterButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disablePortal
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <S.PopoverContainer>
          <S.DrawerHeader>
            <S.DrawerTitle>상세 필터</S.DrawerTitle>
            <S.CloseButton
              src={CloseIcon}
              alt="닫힘 버튼"
              width={24}
              height={24}
              onClick={handleClose}
            />
          </S.DrawerHeader>
          <OptionSection />
          <S.DrawerFooter>
            <S.ResetButton>초기화</S.ResetButton>
            <S.ApplyButton>적용하기</S.ApplyButton>
          </S.DrawerFooter>
        </S.PopoverContainer>
      </Popover>
    </div>
  );
};

export default BasicPopover;

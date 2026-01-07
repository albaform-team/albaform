import Popover from '@mui/material/Popover';
import * as React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/store/_components/DetailFilter/Popover.style';

import OptionSection from './OptionSection';

type BasicPopoverProps = {
  selectedAreas: string[];
  setSelectedAreas: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: string | null;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  minPay: number | null;
  setMinPay: React.Dispatch<React.SetStateAction<number | null>>;
  onApply: () => void;
};

const BasicPopover = ({
  selectedAreas,
  setSelectedAreas,
  startDate,
  setStartDate,
  minPay,
  setMinPay,
  onApply,
}: BasicPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const resetState = () => {
    setSelectedAreas([]);
    setStartDate(null);
    setMinPay(0);
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
          <OptionSection
            selectedAreas={selectedAreas}
            setSelectedAreas={setSelectedAreas}
            startDate={startDate}
            setStartDate={setStartDate}
            minPay={minPay}
            setMinPay={setMinPay}
          />
          <S.DrawerFooter>
            <S.ResetButton onClick={resetState}>초기화</S.ResetButton>
            <S.ApplyButton
              onClick={() => {
                onApply();
                handleClose();
              }}
            >
              적용하기
            </S.ApplyButton>
          </S.DrawerFooter>
        </S.PopoverContainer>
      </Popover>
    </div>
  );
};

export default BasicPopover;

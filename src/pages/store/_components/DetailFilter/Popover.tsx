import Popover from '@mui/material/Popover';
import { useEffect, useRef, useState } from 'react';

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
  filterCount: number;
  setFilterCount: React.Dispatch<React.SetStateAction<number>>;
};

const BasicPopover = ({
  selectedAreas,
  setSelectedAreas,
  startDate,
  setStartDate,
  minPay,
  setMinPay,
  onApply,
  filterCount,
  setFilterCount,
}: BasicPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const payCounter = useRef(false);

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
    setFilterCount(0);
    payCounter.current = false;
  };

  const filterCounter = () => {
    if (minPay !== 0 && !payCounter.current) {
      setFilterCount(prev => prev + 1);
      payCounter.current = true;
    }
  };

  useEffect(() => {
    if (minPay === 0 && payCounter.current) {
      setFilterCount(prev => prev - 1);
      payCounter.current = false;
    }
  }, [minPay]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <S.FilterButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        상세 필터 ({filterCount}){' '}
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
          <S.PopoverContents>
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
            <S.OptionContainer>
              <OptionSection
                selectedAreas={selectedAreas}
                setSelectedAreas={setSelectedAreas}
                startDate={startDate}
                setStartDate={setStartDate}
                minPay={minPay}
                setMinPay={setMinPay}
                setFilterCount={setFilterCount}
              />
            </S.OptionContainer>
            <S.DrawerFooter>
              <S.ResetButton onClick={resetState}>초기화</S.ResetButton>
              <S.ApplyButton
                onClick={() => {
                  onApply();
                  handleClose();
                  filterCounter();
                }}
              >
                적용하기
              </S.ApplyButton>
            </S.DrawerFooter>
          </S.PopoverContents>
        </S.PopoverContainer>
      </Popover>
    </div>
  );
};

export default BasicPopover;

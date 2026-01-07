import * as React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/store/_components/DetailFilter/Drawer.style';

import OptionSection from './OptionSection';

type RightDrawerProps = {
  selectedAreas: string[];
  setSelectedAreas: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: string | null;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  minPay: number | null;
  setMinPay: React.Dispatch<React.SetStateAction<number | null>>;
  onApply: () => void;
};

const RightDrawer = ({
  selectedAreas,
  setSelectedAreas,
  startDate,
  setStartDate,
  minPay,
  setMinPay,
  onApply,
}: RightDrawerProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(isOpen);
    };

  const resetState = () => {
    setSelectedAreas([]);
    setStartDate(null);
    setMinPay(0);
  };

  const clickApply = () => {
    onApply();
    toggleDrawer(false)({ type: 'click' } as React.MouseEvent); // 이렇게 이벤트를 흉내내 호출하거나,
  };

  return (
    <>
      <S.FilterButton onClick={toggleDrawer(true)}>상세 필터</S.FilterButton>
      <S.DrawerContainer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <S.DrawerHeader>
          <S.DrawerTitle>상세 필터</S.DrawerTitle>
          <S.CloseButton
            src={CloseIcon}
            alt="닫힘 버튼"
            width={24}
            height={24}
            onClick={toggleDrawer(false)}
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
              clickApply();
            }}
          >
            적용하기
          </S.ApplyButton>
        </S.DrawerFooter>
      </S.DrawerContainer>
    </>
  );
};

export default RightDrawer;

import * as React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/store/_components/DetailFilter/Drawer.style';

import OptionSection from './OptionSection';

const RightDrawer = () => {
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
        <OptionSection />
        <S.DrawerFooter>
          <S.ResetButton>초기화</S.ResetButton>
          <S.ApplyButton>적용하기</S.ApplyButton>
        </S.DrawerFooter>
      </S.DrawerContainer>
    </>
  );
};

export default RightDrawer;

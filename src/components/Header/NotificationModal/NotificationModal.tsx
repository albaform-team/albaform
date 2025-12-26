import Image from 'next/image';
import Link from 'next/link';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/components/Header/NotificationModal/NotificationModal.styles';

import NotificationItem from './NotificationItem';

const NotificationModal = () => {
  return (
    <S.NotificationContainer>
      <S.NotificationHeader>
        <S.NotificationTitle>알림 6개</S.NotificationTitle>
        <S.CloseButton href={'/'}>
          <Image src={CloseIcon} alt="창닫기" width={24} height={24} />
        </S.CloseButton>
      </S.NotificationHeader>
      <S.NotificationList>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </S.NotificationList>
    </S.NotificationContainer>
  );
};

export default NotificationModal;

import Image from 'next/image';

import CloseIcon from '@/assets/svg/close.svg';

import NotificationItem from './NotificationItem';
import * as S from './NotificationModal.styles';

type NotificationModalProps = {
  onClose: () => void;
};

const NotificationModal = ({ onClose }: NotificationModalProps) => {
  return (
    <S.NotificationContainer onClick={e => e.stopPropagation()}>
      <S.NotificationHeader>
        <S.NotificationTitle>알림 6개</S.NotificationTitle>
        <S.CloseButton as="button" onClick={onClose}>
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

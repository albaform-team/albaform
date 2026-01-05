import Image from 'next/image';

import CloseIcon from '@/assets/svg/close.svg';
import { ApiItem, UserAlertItem } from '@/types/api/alerts';
import { formatDateTimeRange, getTimeAgo } from '@/utils/date';

import NotificationItem from './NotificationItem';
import * as S from './NotificationModal.styles';

interface Props {
  alertList: Array<ApiItem<UserAlertItem>>;
  onClose: () => void;
  onRead: (alertId: string) => void;
}

const NotificationModal = ({ onClose, alertList, onRead }: Props) => {
  return (
    <S.NotificationContainer onClick={e => e.stopPropagation()}>
      <S.NotificationHeader>
        <S.NotificationTitle>알림 {alertList.length}개</S.NotificationTitle>
        <S.CloseButton as="button" onClick={onClose}>
          <Image src={CloseIcon} alt="창닫기" width={24} height={24} />
        </S.CloseButton>
      </S.NotificationHeader>
      <S.NotificationList>
        {alertList.map(({ item }) => (
          <NotificationItem
            key={item.id}
            alertId={item.id}
            onClick={onRead}
            time={formatDateTimeRange(item.notice.item.startsAt, {
              durationHours: item.notice.item.workhour,
            })}
            result={item.result}
            read={item.read}
            shopTitle={item.shop.item.name}
            createdAt={getTimeAgo(item.createdAt)}
          />
        ))}
      </S.NotificationList>
    </S.NotificationContainer>
  );
};

export default NotificationModal;

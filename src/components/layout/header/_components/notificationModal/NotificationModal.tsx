import Image from 'next/image';

import { useMemo, useRef } from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ApiItem, UserAlertItem } from '@/types/api/alerts';
import { formatDateTimeRange, getTimeAgo } from '@/utils/date';

import NotificationItem from './NotificationItem';
import * as S from './NotificationModal.styles';

interface Props {
  alertList: Array<ApiItem<UserAlertItem>>;
  hasNext: boolean;
  isLoading: boolean;
  totalCount: number;

  onClose: () => void;
  onRead: (alertId: string) => void;
  onLoadMore: () => void;
}

const NotificationModal = ({
  alertList,
  hasNext,
  isLoading,
  totalCount,
  onClose,
  onRead,
  onLoadMore,
}: Props) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const enabled = useMemo(() => hasNext && !isLoading, [hasNext, isLoading]);

  const sentinelRef = useIntersectionObserver<HTMLDivElement>({
    rootRef: viewportRef,
    enabled,
    threshold: 0,
    onIntersect: () => {
      onLoadMore();
    },
  });

  return (
    <S.NotificationContainer onClick={e => e.stopPropagation()}>
      <S.NotificationHeader>
        <S.NotificationTitle>알림 {totalCount}개</S.NotificationTitle>
        <S.CloseButton as="button" onClick={onClose}>
          <Image src={CloseIcon} alt="창닫기" width={24} height={24} />
        </S.CloseButton>
      </S.NotificationHeader>
      <S.NotificationList ref={viewportRef}>
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
        <div ref={sentinelRef} />
        {isLoading && <>불러오는 중...</>}
      </S.NotificationList>
    </S.NotificationContainer>
  );
};

export default NotificationModal;

import Image from 'next/image';

import AlarmButton from '@/assets/svg/approvalAlarm.svg';
import { AlertResult } from '@/types/api/alerts';

import * as S from './NotificationItem.styles';

interface Props {
  alertId: string;
  time: string;
  result: AlertResult;
  read: boolean;
  shopTitle: string;
  createdAt: string;
  onClick: (alertId: string) => void;
}

const STATUS_LABEL: Record<AlertResult, string> = {
  accepted: '승인',
  rejected: '거절',
};

export const getStatusLabel = (status: AlertResult): string => {
  return STATUS_LABEL[status];
};

const NotificationItem = ({
  alertId,
  time,
  result,
  read,
  shopTitle,
  createdAt,
  onClick,
}: Props) => {
  return (
    <S.NotificationItem onClick={() => onClick(alertId)}>
      {!read && (
        <Image src={AlarmButton} alt="알람 확인" width={5} height={5} />
      )}
      <S.NotificationMessage>
        {shopTitle} {time} 공고 지원이
        <S.NotificationMessageAlarm result={result}>
          {getStatusLabel(result)}
        </S.NotificationMessageAlarm>
        되었어요.
      </S.NotificationMessage>
      <S.NotificationTime>{createdAt} 전</S.NotificationTime>
    </S.NotificationItem>
  );
};

export default NotificationItem;

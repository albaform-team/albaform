import Image from 'next/image';

import AlarmButton from '@/assets/svg/approvalAlarm.svg';
import { AlertResult } from '@/types/api/alerts';

import * as S from './NotificationItem.styles';

interface Props {
  time: string;
  result: AlertResult;
  read: boolean;
  shopTitle: string;
  createdAt: string;
}

const STATUS_LABEL: Record<AlertResult, string> = {
  accepted: '승인',
  rejected: '거절',
};

export const getStatusLabel = (status: AlertResult): string => {
  return STATUS_LABEL[status];
};

const NotificationItem = ({
  time,
  result,
  read,
  shopTitle,
  createdAt,
}: Props) => {
  return (
    <S.NotificationItem>
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

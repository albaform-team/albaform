import Image from 'next/image';

import AlarmButton from '@/assets/svg/approvalAlarm.svg';
import * as S from '@/components/Header/NotificationModal/NotificationItem.styles';

const NotificationItem = () => {
  return (
    <S.NotificationItem>
      <Image src={AlarmButton} alt="알람 확인" width={5} height={5} />
      <S.NotificationMessage>
        HS 과일주스(2023-01-14 15:00~18:00) 공고 지원이{' '}
        <S.NotificationMessageAlarm>승인</S.NotificationMessageAlarm>되었어요.
      </S.NotificationMessage>
      <S.NotificationTime>1분 전</S.NotificationTime>
    </S.NotificationItem>
  );
};

export default NotificationItem;

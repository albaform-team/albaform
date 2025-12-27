import styled from '@emotion/styled';

const BREAKPOINT = {
  TABLET: 744,
  DESKTOP: 1024,
};

export const NotificationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  width: 323px;
  height: 105px;
  padding: 16px 12px;
  border: 1px solid #e5e4e7;
  border-radius: 5px;
  background-color: #fff;

  @media (width >= 1024px) {
    width: 315px;
    height: 105px;
  }

  @media (width >= 744px) {
    width: 315px;
    height: 105px;
  }
`;

export const NotificationMessage = styled.div`
  color: #111322;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const NotificationMessageAlarm = styled.span`
  color: #0080ff;
`;

export const NotificationTime = styled.div`
  color: #a4a1aa;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

import Image from 'next/image';

import { useState } from 'react';

import LogoImage from '@/assets/svg/logo.svg';
import NotificationImage from '@/assets/svg/notification.svg';
import SearchImage from '@/assets/svg/search.svg';
import {
  AUTH_ROUTES,
  MY_STORE_ROUTES,
  PROFILE_ROUTES,
} from '@/constants/routes';

import * as S from './Header.styles';
import NotificationModal from './notificationModal/NotificationModal';

type UserType = 'unlogin' | 'owner' | 'user';

type HeaderType = {
  user: UserType;
};

const Header = ({ user = 'unlogin' }: HeaderType) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNotification = () => setIsOpen(true);
  const closeNotification = () => setIsOpen(false);

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.HeaderLeft>
            <S.LogoLink href="/">
              <S.LogoImage
                src={LogoImage}
                alt="메인로고"
                width={112}
                height={40}
              />
            </S.LogoLink>
          </S.HeaderLeft>

          <S.SearchBox>
            <Image src={SearchImage} alt="검색" width={20} height={20} />
            <input type="text" placeholder="가게 이름으로 찾아보세요"></input>
          </S.SearchBox>

          <S.HeaderRight>
            {user === 'unlogin' && (
              <>
                <S.Button href={AUTH_ROUTES.LOGIN}>로그인</S.Button>
                <S.Button href={AUTH_ROUTES.SIGN_UP}>회원가입</S.Button>
              </>
            )}
            {user === 'owner' && (
              <>
                <S.Button href={MY_STORE_ROUTES.ROOT}>내 가게</S.Button>
                <S.Button href={AUTH_ROUTES.SIGN_UP}>로그아웃</S.Button>
                <S.NotificationButton onClick={openNotification}>
                  <Image
                    src={NotificationImage}
                    alt="알림"
                    width={24}
                    height={24}
                  />
                </S.NotificationButton>
              </>
            )}
            {user === 'user' && (
              <>
                <S.Button href={PROFILE_ROUTES.ROOT('testUserId')}></S.Button>
                <S.Button href={AUTH_ROUTES.SIGN_UP}>로그아웃</S.Button>
                <S.NotificationButton onClick={openNotification}>
                  <Image
                    src={NotificationImage}
                    alt="알림"
                    width={24}
                    height={24}
                  />
                </S.NotificationButton>
              </>
            )}
            {isOpen && <NotificationModal onClose={closeNotification} />}
          </S.HeaderRight>
        </S.HeaderContent>
      </S.HeaderContainer>
    </>
  );
};

export default Header;

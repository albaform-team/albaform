import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import LogoImage from '@/assets/svg/logo.svg';
import NotificationImage from '@/assets/svg/notification.svg';
import SearchImage from '@/assets/svg/search.svg';
import * as S from '@/components/Header/Header.styles';
import NotificationModal from '@/components/Header/NotificationModal/NotificationModal';

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
                <S.Button href="/login">로그인</S.Button>
                <S.Button href="/signup">회원가입</S.Button>
              </>
            )}
            {user === 'owner' && (
              <>
                <S.Button href="/mystore">내 가게</S.Button>
                <S.Button href="/signup">로그아웃</S.Button>
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
                <S.Button href="/profile">내 프로필</S.Button>
                <S.Button href="/signup">로그아웃</S.Button>
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
            {isOpen && <NotificationModal onClose={() => setIsOpen(false)} />}
          </S.HeaderRight>
        </S.HeaderContent>
      </S.HeaderContainer>
    </>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

type UserType = 'unlogin' | 'owner' | 'user';

type HeaderType = {
  user: UserType;
};

export default function Header({ user }: HeaderType) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Image
            src="/assets/svg/logo.svg"
            alt="메인로고"
            width={112}
            height={40}
            className={styles.logoImage}
          />
          <div className={styles.searchBox}>
            <Image
              src="/assets/png/search.png"
              alt="검색"
              width={20}
              height={20}
            />
            <input type="text" placeholder="가게 이름으로 찾아보세요"></input>
          </div>
        </div>
        <div className={styles.headerRight}>
          {user === 'unlogin' && (
            <>
              <Link href="/login" className={styles.button}>
                로그인
              </Link>
              <Link href="/signup" className={styles.button}>
                회원가입
              </Link>
            </>
          )}
          {user === 'owner' && (
            <>
              <Link href="/mystore" className={styles.button}>
                내 가게
              </Link>
              <Link href="/signup" className={styles.button}>
                로그아웃
              </Link>
              <Image
                src={'/assets/png/notification.png'}
                alt="알림"
                width={24}
                height={24}
              />
            </>
          )}
          {user === 'user' && (
            <>
              <Link href="/mystore" className={styles.button}>
                내 프로필
              </Link>
              <Link href="/signup" className={styles.button}>
                로그아웃
              </Link>
              <Image
                src={'/assets/png/notification.png'}
                alt="알림"
                width={24}
                height={24}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

import Image from 'next/image';

import styles from '@/components/Header/Header.module.css';

export default function Header() {
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
          <div className={styles.button}>로그인</div>
          <div className={styles.button}>회원가입</div>
        </div>
      </div>
    </header>
  );
}

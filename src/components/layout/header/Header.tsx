import Image from 'next/image';
import { useRouter } from 'next/router';

import { isAxiosError } from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import active from '@/assets/img/active.png';
import inactive from '@/assets/img/inactive.png';
import LogoImage from '@/assets/svg/logo.svg';
import {
  AUTH_ROUTES,
  MY_STORE_ROUTES,
  PROFILE_ROUTES,
  STORE_ROUTES,
} from '@/constants/routes';
import useInfinitePagination from '@/hooks/useInfinitePagination';
import { getUserAlerts, readUserAlert } from '@/lib/services/alertService';
import useAuthStore from '@/stores/useAuthStore';
import { ApiItem, UserAlertItem } from '@/types/api/alerts';

import NotificationModal from './_components/notificationModal/NotificationModal';
import SearchForm from './_components/Search/SearchForm';
import * as S from './Header.styles';

const LIMIT = 1;

const Header = () => {
  const user = useAuthStore(s => s.user);
  const rehydrated = useAuthStore(s => s.rehydrated);
  const clearAuth = useAuthStore(s => s.clearAuth);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoadingAlerts, setIsLoadingAlerts] = useState(false);
  const [alertList, setAlertList] = useState<Array<ApiItem<UserAlertItem>>>([]);

  const isFetchingRef = useRef(false);

  const { meta, limit, reset, updateFromResponse } =
    useInfinitePagination(LIMIT);

  const router = useRouter();
  const { q } = router.query;

  const fetchAlertsPage = useCallback(
    async (mode: 'replace' | 'append', offset: number) => {
      if (!user?.id) return;
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;
      setIsLoadingAlerts(true);

      try {
        const res = await getUserAlerts(user.id, { offset, limit });

        updateFromResponse(res);

        setAlertList(prev =>
          mode === 'replace' ? res.items : [...prev, ...res.items]
        );
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      } finally {
        setIsLoadingAlerts(false);
        isFetchingRef.current = false;
      }
    },
    [user?.id, limit, updateFromResponse]
  );

  useEffect(() => {
    if (!rehydrated) return;
    if (!user?.id) return;

    reset();
    setAlertList([]);

    fetchAlertsPage('replace', 0);
  }, [rehydrated, user?.id, reset, fetchAlertsPage]);

  const loadMoreAlerts = useCallback(() => {
    if (!meta.hasNext) return;
    if (isLoadingAlerts) return;

    fetchAlertsPage('append', meta.offset);
  }, [meta.hasNext, meta.offset, isLoadingAlerts, fetchAlertsPage]);

  const openNotification = () => setIsOpen(true);
  const closeNotification = () => setIsOpen(false);

  const hasUnread = useMemo(
    () => alertList.some(a => !a.item.read),
    [alertList]
  );

  const handleReadAlert = useCallback(
    async (alertId: string) => {
      const target = alertList.find(a => a.item.id === alertId);
      if (target?.item.read) return;

      setAlertList(prev =>
        prev.map(a =>
          a.item.id === alertId ? { ...a, item: { ...a.item, read: true } } : a
        )
      );

      try {
        await readUserAlert(user?.id as string, alertId);
      } catch (e) {
        setAlertList(prev =>
          prev.map(a =>
            a.item.id === alertId
              ? { ...a, item: { ...a.item, read: false } }
              : a
          )
        );

        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    },
    [alertList, user?.id]
  );

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLeft>
          <S.LogoLink href={STORE_ROUTES.ROOT}>
            <S.LogoImage
              src={LogoImage}
              alt="메인로고"
              width={112}
              height={40}
            />
          </S.LogoLink>
        </S.HeaderLeft>
        <SearchForm initialValue={q} />
        <S.HeaderRight>
          {user?.type === undefined && (
            <>
              <S.Button href={AUTH_ROUTES.LOGIN}>로그인</S.Button>
              <S.Button href={AUTH_ROUTES.SIGN_UP}>회원가입</S.Button>
            </>
          )}
          {user?.type === 'employer' && (
            <>
              <S.Button href={MY_STORE_ROUTES.ROOT}>내 가게</S.Button>
              <S.Button onClick={clearAuth} href={AUTH_ROUTES.SIGN_UP}>
                로그아웃
              </S.Button>
              <S.NotificationButton onClick={openNotification}>
                <Image
                  src={hasUnread ? active : inactive}
                  alt="알림"
                  width={24}
                  height={24}
                />
              </S.NotificationButton>
            </>
          )}
          {user?.type === 'employee' && (
            <>
              <S.Button href={PROFILE_ROUTES.ROOT(user.id)}>내 프로필</S.Button>
              <S.Button onClick={clearAuth} href={AUTH_ROUTES.SIGN_UP}>
                로그아웃
              </S.Button>
              <S.NotificationButton onClick={openNotification}>
                <Image
                  src={hasUnread ? active : inactive}
                  alt="알림"
                  width={24}
                  height={24}
                />
              </S.NotificationButton>
            </>
          )}
          {isOpen && user?.id && (
            <NotificationModal
              alertList={alertList}
              hasNext={meta.hasNext}
              totalCount={meta.totalCount}
              isLoading={isLoadingAlerts}
              onLoadMore={loadMoreAlerts}
              onClose={closeNotification}
              onRead={handleReadAlert}
            />
          )}
        </S.HeaderRight>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;

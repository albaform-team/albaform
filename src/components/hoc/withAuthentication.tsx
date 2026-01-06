import { useRouter } from 'next/router';

import { ComponentType, useEffect, useMemo } from 'react';

import { STORE_ROUTES } from '@/constants/routes';
import useAuthStore from '@/stores/useAuthStore';

type WithAuthOptions = {
  fallbackRedirectTo?: string; // 권한 없을 때 이동
  allowedTypes?: ('employee' | 'employer')[]; // 허용 유저 타입(없으면 로그인만 체크)
};

const withAuthentication = <P extends object>(
  Wrapped: ComponentType<P>,
  options: WithAuthOptions = {}
) => {
  const { allowedTypes, fallbackRedirectTo = STORE_ROUTES.ROOT } = options;

  const WithAuthentication = (props: P) => {
    const router = useRouter();
    const accessToken = useAuthStore(s => s.accessToken);
    const user = useAuthStore(s => s.user);
    const rehydrated = useAuthStore(s => s.rehydrated);

    const canRender = useMemo(() => {
      if (!rehydrated) return false;
      if (!accessToken) return false;
      if (!allowedTypes) return true;
      return !!user?.type && allowedTypes.includes(user.type);
    }, [rehydrated, accessToken, user?.type]);

    useEffect(() => {
      if (!rehydrated) return;

      const goBackOrFallback = () => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.replace(fallbackRedirectTo);
        }
      };

      if (!accessToken) {
        goBackOrFallback();
        return;
      }

      if (allowedTypes && (!user?.type || !allowedTypes.includes(user.type))) {
        goBackOrFallback();
      }
    }, [rehydrated, accessToken, user?.type, router]);

    if (!canRender) return null;
    return <Wrapped {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;

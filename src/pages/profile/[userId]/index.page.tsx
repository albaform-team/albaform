import { useRouter } from 'next/navigation';

import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import withAuthentication from '@/components/hoc/withAuthentication';
import { PROFILE_ROUTES, STORE_ROUTES } from '@/constants/routes';
import { GetUserInfo } from '@/lib/services/userService';
import useAuthStore from '@/stores/useAuthStore';
import { User } from '@/types/api/user';

import AppliedJobListSection from './_components/AppliedJobListSection';
import EmptyStateSection from './_components/EmptyStateSection';
import MyProfileSection from './_components/MyProfileSection';
import * as S from './index.page.style';

const ProfileUserPage = () => {
  const user = useAuthStore(s => s.user);
  const accessToken = useAuthStore(s => s.accessToken);
  const rehydrated = useAuthStore(s => s.rehydrated);
  const [userInfo, setUserInfo] = useState<Required<User> | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!rehydrated) return;
    if (!accessToken) {
      router.push(STORE_ROUTES.ROOT);
    }
    if (!user?.id) return;

    const fetchUserInfo = async () => {
      try {
        const data = await GetUserInfo(user.id);

        if (!data.item.name) return;

        setUserInfo(data.item as Required<User>);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      }
    };

    fetchUserInfo();
  }, [accessToken, router, user, rehydrated]);

  if (!accessToken) {
    return null;
  }

  return (
    <S.ProfileLayout>
      <S.ProfileWrapper>
        {userInfo ? (
          <MyProfileSection
            address={userInfo.address}
            bio={userInfo.bio}
            name={userInfo.name}
            phone={userInfo.phone}
          />
        ) : (
          <EmptyStateSection
            title="내 프로필"
            description="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
            actionLabel="내 프로필 등록하기"
            href={PROFILE_ROUTES.ADD_PROFILE(user?.id as string)}
          />
        )}
      </S.ProfileWrapper>
      {userInfo && (
        <S.AppliedJobListWrapper>
          <AppliedJobListSection
            userInfo={userInfo}
            userId={user?.id ?? null}
          />
        </S.AppliedJobListWrapper>
      )}
    </S.ProfileLayout>
  );
};

export default withAuthentication(ProfileUserPage, {
  allowedTypes: ['employee'],
});

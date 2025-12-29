import { PROFILE_ROUTES } from '@/constants/routes';
import useAuthStore from '@/stores/useAuthStore';

import * as S from './ProfileSetupSection.style';

const ProfileSetupSection = () => {
  const user = useAuthStore(s => s.user);

  return (
    <section>
      <S.Title>내 프로필</S.Title>
      <S.ProfileCard>
        <S.Description>
          내 프로필을 등록하고 원하는 가게에 지원해 보세요.
        </S.Description>
        <S.ActionButton href={PROFILE_ROUTES.ADD_PROFILE(user?.id as string)}>
          내 프로필 등록하기
        </S.ActionButton>
      </S.ProfileCard>
    </section>
  );
};
export default ProfileSetupSection;

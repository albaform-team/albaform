import Phone from '@/assets/svg/Phone';
import Pin from '@/assets/svg/Pin';
import { PROFILE_ROUTES } from '@/constants/routes';
import useAuthStore from '@/stores/useAuthStore';

import * as S from './MyProfileSection.style';

interface Props {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

const MyProfileSection = ({ name, phone, address, bio }: Props) => {
  const user = useAuthStore(s => s.user);

  return (
    <S.MyProfileLayout>
      <S.Title>내 프로필</S.Title>
      <S.ProfileCard>
        <div>
          <S.InfoList>
            <div>
              <S.NameLabel>이름</S.NameLabel>
              <S.Name>{name}</S.Name>
            </div>
            <S.InfoItem>
              <S.IconBox>
                <Phone />
              </S.IconBox>
              {phone}
            </S.InfoItem>
            <S.InfoItem>
              <S.IconBox>
                <Pin />
              </S.IconBox>
              선호 지역: {address}
            </S.InfoItem>
          </S.InfoList>
          <S.Bio>{bio}</S.Bio>
        </div>
        <S.EditButton
          type="button"
          href={PROFILE_ROUTES.ADD_PROFILE(user?.id as string)}
        >
          편집하기
        </S.EditButton>
      </S.ProfileCard>
    </S.MyProfileLayout>
  );
};

export default MyProfileSection;

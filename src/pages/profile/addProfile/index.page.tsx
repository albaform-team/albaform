import Link from 'next/link';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/profile/addProfile/index.page.style';

import AreaOptionSelect from './_components/AreaOptionSelect';
import SuccessModal from './_components/SuccessModal';

const AddProfile = () => {
  return (
    <S.AddProfileContainer>
      <S.AddProfileContent>
        <S.AddProfileContents>
          <S.AddProfileHeader>
            <S.AddProfileTitle>내 프로필</S.AddProfileTitle>
            <Link href={'/'}>
              <S.CloseButton
                src={CloseIcon}
                alt="닫힘 버튼"
                width={24}
                height={24}
              />
            </Link>
          </S.AddProfileHeader>
          <S.AddInputSection>
            <S.ProfileBasicInfo>
              <S.ProfileItem>
                <S.ProfileOption>이름*</S.ProfileOption>
                <S.InputBox disableUnderline placeholder="입력"></S.InputBox>
              </S.ProfileItem>
              <S.ProfileItem>
                <S.ProfileOption>연락처*</S.ProfileOption>
                <S.InputBox disableUnderline placeholder="입력"></S.InputBox>
              </S.ProfileItem>
              <S.ProfileItem>
                <S.ProfileOption>선호 지역</S.ProfileOption>
                <AreaOptionSelect />
              </S.ProfileItem>
            </S.ProfileBasicInfo>
            <S.ProfileItem>
              <S.ProfileOption>소개</S.ProfileOption>
              <S.TextInputBox
                multiline
                placeholder="입력"
                variant="outlined"
              ></S.TextInputBox>
            </S.ProfileItem>
          </S.AddInputSection>
        </S.AddProfileContents>
        <SuccessModal />
      </S.AddProfileContent>
    </S.AddProfileContainer>
  );
};

export default AddProfile;

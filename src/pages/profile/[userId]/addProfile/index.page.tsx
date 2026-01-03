import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import { registerUserProfile } from '@/lib/services/userProfileService';
import * as S from '@/pages/profile/[userId]/addProfile/index.page.style';
import useAuthStore from '@/stores/useAuthStore';

import AreaOptionSelect from './_components/AreaOptionSelect';
import SuccessModal from './_components/SuccessModal';

const AddProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { user } = useAuthStore.getState();

  const handleSubmit = async () => {
    if (!user?.id) return;

    const userData = {
      name: name,
      phone: phone,
      address: address,
      bio: bio,
    };

    try {
      await registerUserProfile(user.id, userData);
    } catch (error) {
      console.log(error);
    }

    setSuccessModalOpen(true);
  };
  return (
    <S.AddProfileContainer>
      <S.AddProfileContent>
        <S.AddProfileContents>
          <S.AddProfileHeader>
            <S.AddProfileTitle>내 프로필</S.AddProfileTitle>
            <Link href={`/profile/${userId}`}>
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
                <S.InputBox
                  disableUnderline
                  placeholder="입력"
                  value={name}
                  onChange={e => setName(e.target.value)}
                ></S.InputBox>
              </S.ProfileItem>
              <S.ProfileItem>
                <S.ProfileOption>연락처*</S.ProfileOption>
                <S.InputBox
                  disableUnderline
                  placeholder="입력"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                ></S.InputBox>
              </S.ProfileItem>
              <S.ProfileItem>
                <S.ProfileOption>선호 지역</S.ProfileOption>
                <AreaOptionSelect value={address} onChange={setAddress} />
              </S.ProfileItem>
            </S.ProfileBasicInfo>
            <S.ProfileItem>
              <S.ProfileOption>소개</S.ProfileOption>
              <S.TextInputBox
                multiline
                placeholder="입력"
                variant="outlined"
                value={bio}
                onChange={e => setBio(e.target.value)}
              ></S.TextInputBox>
            </S.ProfileItem>
          </S.AddInputSection>
        </S.AddProfileContents>
        <S.AddButton onClick={handleSubmit}>등록하기</S.AddButton>
        {successModalOpen && (
          <SuccessModal
            open={successModalOpen}
            onClose={() => setSuccessModalOpen(false)}
          />
        )}
      </S.AddProfileContent>
    </S.AddProfileContainer>
  );
};

export default AddProfile;

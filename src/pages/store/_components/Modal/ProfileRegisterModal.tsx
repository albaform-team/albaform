import Image from 'next/image';

import Modal from '@mui/material/Modal';
import * as React from 'react';

import WarningIcon from '@/assets/svg/warning.svg';
import * as S from '@/pages/store/_components/Modal/ProfileRegisterModal.style';

interface ProfileRegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileRegisterModal = ({ open, onClose }: ProfileRegisterModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ModalContainer>
        <Image src={WarningIcon} alt="경고" width={24} height={24} />
        <S.ModalText>내 프로필을 먼저 등록해 주세요.</S.ModalText>
        <S.ModalButton onClick={onClose}>확인</S.ModalButton>
      </S.ModalContainer>
    </Modal>
  );
};

export default ProfileRegisterModal;

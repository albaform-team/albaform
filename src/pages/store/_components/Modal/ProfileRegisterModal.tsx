import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import WarningIcon from '@/assets/svg/warning.svg';
import * as S from '@/pages/store/_components/Modal/ProfileRegisterModal.style';

const ProfileRegisterModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalContainer>
          <Image src={WarningIcon} alt="경고" width={24} height={24} />
          <S.ModalText>내 프로필을 먼저 등록해 주세요.</S.ModalText>
          <S.ModalButton onClick={handleClose}>확인</S.ModalButton>
        </S.ModalContainer>
      </Modal>
    </div>
  );
};

export default ProfileRegisterModal;

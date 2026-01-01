import Modal from '@mui/material/Modal';
import { useState } from 'react';

import * as S from '@/pages/profile/addProfile/_components/SuccessModal.style';

const SuccessModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <S.AddButton onClick={handleOpen}>등록하기</S.AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBox>
          <S.ModalContent>
            <S.ModalText>등록이 완료되었습니다.</S.ModalText>
            <S.ModalButton onClick={handleClose}>확인</S.ModalButton>
          </S.ModalContent>
        </S.ModalBox>
      </Modal>
    </div>
  );
};

export default SuccessModal;

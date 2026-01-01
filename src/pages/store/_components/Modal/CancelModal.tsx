import Image from 'next/image';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';

import CheckIcon from '@/assets/svg/check.svg';
import * as S from '@/pages/store/_components/Modal/CancelModal.style';

const CancelModal = () => {
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
          <Image src={CheckIcon} alt="확인" width={24} height={24} />
          <S.ModalText>신청을 취소하시겠어요?</S.ModalText>
          <S.ModalButtonBox>
            <S.ModalOutlineButton onClick={handleClose}>
              아니오
            </S.ModalOutlineButton>
            <S.ModalButton>취소하기</S.ModalButton>
          </S.ModalButtonBox>
        </S.ModalContainer>
      </Modal>
    </div>
  );
};

export default CancelModal;

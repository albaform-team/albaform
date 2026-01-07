import Image from 'next/image';

import Modal from '@mui/material/Modal';

import CheckIcon from '@/assets/svg/check.svg';
import * as S from '@/pages/store/_components/Modal/CancelModal.style';

interface CancelModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CancelModal = ({ open, onClose, onConfirm }: CancelModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ModalContainer>
        <Image src={CheckIcon} alt="확인" width={24} height={24} />
        <S.ModalText>신청을 취소하시겠어요?</S.ModalText>
        <S.ModalButtonBox>
          <S.ModalOutlineButton onClick={onClose}>아니오</S.ModalOutlineButton>
          <S.ModalButton onClick={onConfirm}>취소하기</S.ModalButton>
        </S.ModalButtonBox>
      </S.ModalContainer>
    </Modal>
  );
};

export default CancelModal;

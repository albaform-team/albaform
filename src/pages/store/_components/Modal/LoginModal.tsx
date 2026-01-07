import Image from 'next/image';
import Link from 'next/link';

import Modal from '@mui/material/Modal';

import WarningIcon from '@/assets/svg/warning.svg';
import * as S from '@/pages/store/_components/Modal/LoginModal.style';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.ModalContainer>
        <Image src={WarningIcon} alt="경고" width={24} height={24} />
        <S.ModalText>
          로그인이 필요한 서비스입니다.
          <br />
          지금 로그인하시겠어요?
        </S.ModalText>
        <S.ModalButtonBox>
          <S.ModalOutlineButton onClick={onClose}>닫기</S.ModalOutlineButton>
          <Link href={'/login'}>
            <S.ModalButton>로그인</S.ModalButton>
          </Link>
        </S.ModalButtonBox>
      </S.ModalContainer>
    </Modal>
  );
};

export default LoginModal;

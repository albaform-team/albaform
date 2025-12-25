import { Modal } from '@mui/material';

import { ModalState } from '..';

import * as S from './LoginModal.style';

interface Props {
  modalState: ModalState;
  handleClose: () => void;
}

const LoginModal = ({ modalState, handleClose }: Props) => {
  return (
    <>
      <Modal open={modalState.open} onClose={handleClose}>
        <S.ModalContainer>
          <S.ModalInner>
            <S.TextBox>{modalState.message}</S.TextBox>
            <S.ModalCloseButton onClick={handleClose}>
              닫기 버튼
            </S.ModalCloseButton>
          </S.ModalInner>
        </S.ModalContainer>
      </Modal>
    </>
  );
};

export default LoginModal;

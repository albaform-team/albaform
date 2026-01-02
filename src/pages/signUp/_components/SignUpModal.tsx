import { Modal } from '@mui/material';

import { ModalState } from '../index.page';

import * as S from './SignUpModal.style';

interface Props {
  modalState: ModalState;
  handleClose: () => void;
}

const SignUpModal = ({ modalState, handleClose }: Props) => {
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

export default SignUpModal;

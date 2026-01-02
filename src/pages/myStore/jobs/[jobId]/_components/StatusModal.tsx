import { Modal } from '@mui/material';

import CheckedCircle from '@/assets/svg/CheckedCircle';

import { ModalState, Payload } from '../index.page';

import * as S from './StatusModal.style';

interface Props {
  modalState: ModalState;
  handleClose: () => void;
  handleConfirm: (payload: Payload) => void;
}

const StatusModal = ({ modalState, handleClose, handleConfirm }: Props) => {
  if (modalState.payload === null) {
    return <></>;
  }

  return (
    <>
      <Modal open={modalState.open} onClose={handleClose}>
        <S.ModalContainer>
          <S.ModalInner>
            <CheckedCircle />
            <S.TextBox>{modalState.message}</S.TextBox>
            <S.ButtonWrapper>
              <S.ModalCloseButton onClick={handleClose}>
                아니오
              </S.ModalCloseButton>
              <S.CofirmButton onClick={() => handleConfirm(modalState.payload)}>
                예
              </S.CofirmButton>
            </S.ButtonWrapper>
          </S.ModalInner>
        </S.ModalContainer>
      </Modal>
    </>
  );
};

export default StatusModal;

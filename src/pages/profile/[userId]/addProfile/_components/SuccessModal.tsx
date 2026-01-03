import Link from 'next/link';
import { useRouter } from 'next/router';

import Modal from '@mui/material/Modal';

import * as S from '@/pages/profile/[userId]/addProfile/_components/SuccessModal.style';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBox>
          <S.ModalContent>
            <S.ModalText>등록이 완료되었습니다.</S.ModalText>
            <Link href={`/profile/${userId}`}>
              <S.ModalButton onClick={onClose}>확인</S.ModalButton>
            </Link>
          </S.ModalContent>
        </S.ModalBox>
      </Modal>
    </div>
  );
};

export default SuccessModal;

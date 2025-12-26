import * as React from 'react';
import * as S from './new.style';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import CloseIcon from '@/assets/svg/closeicon.svg';

const JobRegisterPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.Container>
      <S.Section>
        <S.TitleWrap>
          <S.Title>공고 등록</S.Title>
          <Image src={CloseIcon} alt="CloseIcon" />
        </S.TitleWrap>
        <S.Wraps>
          <S.InputWrap>
            <S.InputWrapLabel>시급*</S.InputWrapLabel>
            <S.TextWon>원</S.TextWon>
            <S.Input type="number" placeholder="입력" />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>시작 일시*</S.InputWrapLabel>
            <S.Input type="datetime-local" />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>업무 시간*</S.InputWrapLabel>
            <S.TextWon>시간</S.TextWon>
            <S.Input type="number" placeholder="입력" />
          </S.InputWrap>
        </S.Wraps>
        <S.Wraps>
          <S.InputWrapExplain>
            <S.InputWrapLabel>공고 설명</S.InputWrapLabel>
            <S.TextBox placeholder="입력" />
          </S.InputWrapExplain>
        </S.Wraps>
        <S.Button onClick={handleOpen}>등록하기</S.Button>
        <Modal open={open} onClose={handleClose}>
          <S.ModalBox>
            <S.ModalText>등록이 완료되었습니다.</S.ModalText>
            <S.ModalButton onClick={handleClose}>확인</S.ModalButton>
          </S.ModalBox>
        </Modal>
      </S.Section>
    </S.Container>
  );
};

export default JobRegisterPage;

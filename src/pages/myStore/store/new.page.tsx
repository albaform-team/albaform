import Image from 'next/image';

import Modal from '@mui/material/Modal';
import * as React from 'react';

import CloseIcon from '@/assets/svg/closeicon.svg';
import StoreImgComponent from '@/pages/myStore/store/_components/storeimg';

import * as S from './new.style';

const StoreRegisterPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <S.Container>
      <S.Section>
        <S.TitleWrap>
          <S.Title>가게 정보</S.Title>
          <Image src={CloseIcon} alt="CloseIcon" />
        </S.TitleWrap>
        <S.Wraps>
          <S.InputWrap>
            <S.InputWrapLabel>가게 이름*</S.InputWrapLabel>
            <S.Input type="text" placeholder="입력" />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>분류*</S.InputWrapLabel>
            <S.Select>
              <option>선택</option>
              <option>한식</option>
              <option>중식</option>
              <option>일식</option>
              <option>양식</option>
              <option>분식</option>
              <option>카페</option>
              <option>편의점</option>
              <option>기타</option>
            </S.Select>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>주소*</S.InputWrapLabel>
            <S.Select>
              <option>선택</option>
              <option>서울시 종로구</option>
              <option>서울시 중구</option>
              <option>서울시 용산구</option>
              <option>서울시 성동구</option>
              <option>서울시 광진구</option>
              <option>서울시 동대문구</option>
              <option>서울시 중랑구</option>
              <option>서울시 성북구</option>
              <option>서울시 강북구</option>
              <option>서울시 도봉구</option>
              <option>서울시 노원구</option>
              <option>서울시 은평구</option>
              <option>서울시 서대문구</option>
              <option>서울시 마포구</option>
              <option>서울시 양천구</option>
              <option>서울시 강서구</option>
              <option>서울시 구로구</option>
              <option>서울시 금천구</option>
              <option>서울시 영등포구</option>
              <option>서울시 동작구</option>
              <option>서울시 관악구</option>
              <option>서울시 서초구</option>
              <option>서울시 강남구</option>
              <option>서울시 송파구</option>
              <option>서울시 강동구</option>
            </S.Select>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>상세 주소*</S.InputWrapLabel>
            <S.Input type="text" placeholder="입력" />
          </S.InputWrap>
          <S.InputWrap>
            <S.InputWrapLabel>기본 시급*</S.InputWrapLabel>
            <S.TextWon>원</S.TextWon>
            <S.Input type="number" placeholder="입력" />
          </S.InputWrap>
        </S.Wraps>
        <S.Wraps>
          <S.InputWrapImg>
            <S.InputWrapLabel>가게 이미지</S.InputWrapLabel>
            <S.StoreImgBox>
              <StoreImgComponent />
            </S.StoreImgBox>
          </S.InputWrapImg>
        </S.Wraps>
        <S.Wraps>
          <S.InputWrapExplain>
            <S.InputWrapLabel>가게 설명</S.InputWrapLabel>
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

export default StoreRegisterPage;

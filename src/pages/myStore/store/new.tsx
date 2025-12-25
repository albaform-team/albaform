import * as S from './new.style';

const StoreRegisterPage = () => {
  return (
    <S.Container>
      <S.Title>가게 정보</S.Title>
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
        </S.Select>
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>상세 주소*</S.InputWrapLabel>
        <S.Input type="text" placeholder="입력" />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>기본 시급*</S.InputWrapLabel>
        <S.TextWon>원</S.TextWon>
        <S.Input type="text" placeholder="입력" />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>가게 이미지</S.InputWrapLabel>
        <S.StoreImgBox />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>가게 설명</S.InputWrapLabel>
        <S.TextBox placeholder="입력" />
      </S.InputWrap>
      <S.Button>등록하기</S.Button>
    </S.Container>
  );
};

export default StoreRegisterPage;

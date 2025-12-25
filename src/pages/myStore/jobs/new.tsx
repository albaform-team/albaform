import * as S from './new.style';

const JobRegisterPage = () => {
  return (
    <S.Container>
      <S.Title>공고 등록</S.Title>
      <S.InputWrap>
        <S.InputWrapLabel>시급*</S.InputWrapLabel>
        <S.TextWon>원</S.TextWon>
        <S.Input type="text" placeholder="입력" />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>시작 일시*</S.InputWrapLabel>
        <S.Input type="datetime-local" />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>업무 시간*</S.InputWrapLabel>
        <S.TextWon>시간</S.TextWon>
        <S.Input type="text" placeholder="입력" />
      </S.InputWrap>
      <S.InputWrap>
        <S.InputWrapLabel>공고 설명</S.InputWrapLabel>
        <S.TextBox placeholder="입력" />
      </S.InputWrap>
      <S.Button>등록하기</S.Button>
    </S.Container>
  );
};

export default JobRegisterPage;

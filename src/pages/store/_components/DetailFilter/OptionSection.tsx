import * as S from '@/pages/store/_components/DetailFilter/OptionSection.style';

const OptionSection = () => {
  return (
    <S.DetailOption>
      <S.LocationSection>
        <S.DetailOptionTitle>위치</S.DetailOptionTitle>
        <S.LocationSelectBox>
          <S.LocationScrollArea>
            <S.LocationSelectOption>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
              <div>경기도 군포시</div>
            </S.LocationSelectOption>
          </S.LocationScrollArea>
        </S.LocationSelectBox>
        <S.SelectedLocation></S.SelectedLocation>
      </S.LocationSection>
      <S.StartSection>
        <S.DetailOptionTitle>시작일</S.DetailOptionTitle>
        <S.StartInput disableUnderline placeholder="입력"></S.StartInput>
      </S.StartSection>
      <S.PaySection>
        <S.DetailOptionTitle>금액</S.DetailOptionTitle>
        <S.PayInput>
          <S.PayInputBox disableUnderline placeholder="입력"></S.PayInputBox>
          <S.DetailOptionTitle>이상부터</S.DetailOptionTitle>
        </S.PayInput>
      </S.PaySection>
    </S.DetailOption>
  );
};

export default OptionSection;

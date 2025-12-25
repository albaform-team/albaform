import * as S from './index.style';

const StorePage = () => {
  return (
    <S.Container>
      <S.Title>내 가게</S.Title>
      <S.Card>
        <S.CardText>내 가게를 소개하고 공고도 등록해 보세요.</S.CardText>
        <S.Button>가게 등록하기</S.Button>
      </S.Card>
    </S.Container>
  );
};

export default StorePage;

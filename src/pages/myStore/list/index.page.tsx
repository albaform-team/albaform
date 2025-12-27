import Image from 'next/image';

import * as S from './index.style';

import NavIcon from '@/assets/svg/navicon.svg';

const StoreListPage = () => {
  return (
    <>
      <S.Container>
        <S.Section>
          <S.TitleWrap>
            <S.Title>내 가게</S.Title>
          </S.TitleWrap>
          <S.Card>
            <S.CardImgWrap />
            <S.CardTextWrap>
              <S.CardTitleWrap>
                <S.CardSmallTitle>식당</S.CardSmallTitle>
                <S.CardTitle>도토리식당</S.CardTitle>
              </S.CardTitleWrap>
              <S.CardNavWrap>
                <Image src={NavIcon} alt="NavIcon" />
                <S.CardNavText>서울시 송파구</S.CardNavText>
              </S.CardNavWrap>
              <S.CardTextArea>
                알바하기 편한 너구리네 라면집!
                <br /> 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는
                가게입니다.
              </S.CardTextArea>
              <S.CardButtonWrap>
                <S.CardEditButton>편집하기</S.CardEditButton>
                <S.CardRegisterButton>공고 등록하기</S.CardRegisterButton>
              </S.CardButtonWrap>
            </S.CardTextWrap>
          </S.Card>
        </S.Section>
      </S.Container>
    </>
  );
};

export default StoreListPage;

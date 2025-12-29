import Image from 'next/image';

import StoreImg from '@/assets/img/storeimg.png';
import NavIcon from '@/assets/svg/navicon.svg';

import * as S from './index.style';

const StoreListIdPage = () => {
  return (
    <>
      <S.Container>
        <S.Section01>
          <S.TitleWrap>
            <S.Title>내 가게</S.Title>
          </S.TitleWrap>
          <S.Card>
            <S.CardImgWrap>
              <Image src={StoreImg} fill alt="StoreImg" />
            </S.CardImgWrap>
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
        </S.Section01>
      </S.Container>
      <S.ContainerBg>
        <S.Section02>
          <S.TitleWrap>
            <S.Title>내가 등록한 공고</S.Title>
          </S.TitleWrap>
          <S.CardListWrap>
            <S.CardList>
              <S.CardListImgWrap>
                <Image src={StoreImg} fill alt="StoreImg" />
              </S.CardListImgWrap>
              <S.CardListTextWrap>
                <S.CardListTitleWrap>
                  <S.CardListTitle>도토리식당</S.CardListTitle>
                </S.CardListTitleWrap>
                <S.CardListNavWrap01>
                  <S.ClockIcon />
                  <S.CardListNavText>
                    2023-06-02 15:00~18:00 (3시간)
                  </S.CardListNavText>
                </S.CardListNavWrap01>
                <S.CardListNavWrap>
                  <S.NavIcon />
                  <S.CardListNavText>서울시 송파구</S.CardListNavText>
                </S.CardListNavWrap>
              </S.CardListTextWrap>
              <S.CardPriceTextWrap>
                <S.CardPriceText>15,000원</S.CardPriceText>
                <S.CardPriceSubTextWrap>
                  <S.CardPriceSubText>기존 시급보다 50%</S.CardPriceSubText>
                  <S.ArrowIcon />
                </S.CardPriceSubTextWrap>
              </S.CardPriceTextWrap>
            </S.CardList>
            <S.CardListDisable>
              <S.CardListImgWrap>
                <div>마감 완료</div>
                <Image src={StoreImg} fill alt="StoreImg" />
              </S.CardListImgWrap>
              <S.CardListTextWrap>
                <S.CardListTitleWrap>
                  <S.CardListTitleDisable>도토리식당</S.CardListTitleDisable>
                </S.CardListTitleWrap>
                <S.CardListNavWrap01>
                  <S.ClockIconDisable />
                  <S.CardListNavTextDisable>
                    2023-06-02 15:00~18:00 (3시간)
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap01>
                <S.CardListNavWrap>
                  <S.NavIconDisable />
                  <S.CardListNavTextDisable>
                    서울시 송파구
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap>
              </S.CardListTextWrap>
              <S.CardPriceTextWrap>
                <S.CardPriceTextDisable>15,000원</S.CardPriceTextDisable>
                <S.CardPriceSubTextWrapDisable>
                  <S.CardPriceSubTextDisable>
                    기존 시급보다 100%
                  </S.CardPriceSubTextDisable>
                  <S.ArrowIconDisable />
                </S.CardPriceSubTextWrapDisable>
              </S.CardPriceTextWrap>
            </S.CardListDisable>
            <S.CardListDisable>
              <S.CardListImgWrap>
                <div>마감 완료</div>
                <Image src={StoreImg} fill alt="StoreImg" />
              </S.CardListImgWrap>
              <S.CardListTextWrap>
                <S.CardListTitleWrap>
                  <S.CardListTitleDisable>도토리식당</S.CardListTitleDisable>
                </S.CardListTitleWrap>
                <S.CardListNavWrap01>
                  <S.ClockIconDisable />
                  <S.CardListNavTextDisable>
                    2023-06-02 15:00~18:00 (3시간)
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap01>
                <S.CardListNavWrap>
                  <S.NavIconDisable />
                  <S.CardListNavTextDisable>
                    서울시 송파구
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap>
              </S.CardListTextWrap>
              <S.CardPriceTextWrap>
                <S.CardPriceTextDisable>15,000원</S.CardPriceTextDisable>
                <S.CardPriceSubTextWrapDisable>
                  <S.CardPriceSubTextDisable>
                    기존 시급보다 100%
                  </S.CardPriceSubTextDisable>
                  <S.ArrowIconDisable />
                </S.CardPriceSubTextWrapDisable>
              </S.CardPriceTextWrap>
            </S.CardListDisable>
            <S.CardListDisable>
              <S.CardListImgWrap>
                <div>마감 완료</div>
                <Image src={StoreImg} fill alt="StoreImg" />
              </S.CardListImgWrap>
              <S.CardListTextWrap>
                <S.CardListTitleWrap>
                  <S.CardListTitleDisable>도토리식당</S.CardListTitleDisable>
                </S.CardListTitleWrap>
                <S.CardListNavWrap01>
                  <S.ClockIconDisable />
                  <S.CardListNavTextDisable>
                    2023-06-02 15:00~18:00 (3시간)
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap01>
                <S.CardListNavWrap>
                  <S.NavIconDisable />
                  <S.CardListNavTextDisable>
                    서울시 송파구
                  </S.CardListNavTextDisable>
                </S.CardListNavWrap>
              </S.CardListTextWrap>
              <S.CardPriceTextWrap>
                <S.CardPriceTextDisable>15,000원</S.CardPriceTextDisable>
                <S.CardPriceSubTextWrapDisable>
                  <S.CardPriceSubTextDisable>
                    기존 시급보다 100%
                  </S.CardPriceSubTextDisable>
                  <S.ArrowIconDisable />
                </S.CardPriceSubTextWrapDisable>
              </S.CardPriceTextWrap>
            </S.CardListDisable>
          </S.CardListWrap>
        </S.Section02>
      </S.ContainerBg>
    </>
  );
};

export default StoreListIdPage;

import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';
import { useState, useEffect } from 'react';

import { MY_STORE_ROUTES } from '@/constants/routes';

import * as S from './index.style';

const StoreListPage = () => {
  // 가게 이름
  const [storeName, setStoreName] = useState('');

  // 주소
  const [addressSelected, setAddressSelected] = useState('');

  // 가게 이미지
  const [imgFile, setImgFile] = useState<string>('');

  // 가게 설명
  const [textExplain, setTextExplain] = useState('');

  useEffect(() => {
    const importData = async () => {
      const getInfo = sessionStorage.getItem('auth-storage');
      const getUser = JSON.parse(getInfo as string);
      const getUserId = getUser.state.user.id;

      const getShop = await axios.get(
        `https://bootcamp-api.codeit.kr/api/0-1/the-julge/users/${getUserId}`
      );

      const shopData = getShop.data.item.shop.item;

      setStoreName(shopData.name);
      setAddressSelected(shopData.address1);
      setImgFile(shopData.imageUrl);
      setTextExplain(shopData.description);
    };

    importData();
  }, []);

  return (
    <>
      <S.Container>
        <S.Section01>
          <S.TitleWrap>
            <S.Title>내 가게</S.Title>
          </S.TitleWrap>
          <S.Card>
            <S.CardImgWrap>
              <Image src={imgFile} fill alt="StoreImg" priority />
            </S.CardImgWrap>
            <S.CardTextWrap>
              <S.CardTitleWrap>
                <S.CardSmallTitle>식당</S.CardSmallTitle>
                <S.CardTitle>{storeName}</S.CardTitle>
              </S.CardTitleWrap>
              <S.CardNavWrap>
                <S.TopNavIcon />
                <S.CardNavText>{addressSelected}</S.CardNavText>
              </S.CardNavWrap>
              <S.CardTextArea>{textExplain}</S.CardTextArea>
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
            <S.Title>등록한 공고</S.Title>
          </S.TitleWrap>
          <S.CardJobs>
            <S.CardJobsText>공고를 등록해 보세요.</S.CardJobsText>
            <Link href={MY_STORE_ROUTES.STORE.NEW}>
              <S.JobsButton>공고 등록하기</S.JobsButton>
            </Link>
          </S.CardJobs>
        </S.Section02>
      </S.ContainerBg>
    </>
  );
};

export default StoreListPage;

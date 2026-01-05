import Image from 'next/image';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import StoreImg from '@/assets/img/storeimg.png';

import * as S from './index.style';
import Link from 'next/link';
import { MY_STORE_ROUTES } from '@/constants/routes';
import { services } from '@/lib/services/servicesClient';
import { NOTICES_API, USERS_API } from '@/constants/api';

const StoreListIdPage = () => {
  // 가게 이름
  const [storeName, setStoreName] = useState('');

  // 분류
  const [categorySelected, setCategorySelected] = useState('선택');

  // 주소
  const [addressSelected, setAddressSelected] = useState('');

  // 가게 이미지
  const [imgFile, setImgFile] = useState<string>('');

  // 가게 설명
  const [textExplain, setTextExplain] = useState('');

  const router = useRouter();
  const jobId = router.query.id;

  type Job = {
    item: {
      id: string;
      workhour: number;
      hourlyPay: number;
      startsAt: number;
    };
  };
  const [showJob, setShowJob] = useState<Job[]>([]);

  const changeTime = () => {
    if (showJob.length === 0) return '';

    const date = new Date(showJob[0].item.startsAt);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  changeTime();

  useEffect(() => {
    const importData = async () => {
      const getInfo = sessionStorage.getItem('auth-storage');
      const getUser = JSON.parse(getInfo as string);
      const getUserId = getUser.state.user.id;

      const getShop = await services.get(USERS_API.ME(getUserId));

      const shopData = getShop?.data?.item?.shop?.item;
      if (!shopData) return;

      const shopId = getShop.data.item.shop.item.id;

      setStoreName(shopData.name);
      setCategorySelected(shopData.category);
      setAddressSelected(shopData.address1);
      setImgFile(shopData.imageUrl);
      setTextExplain(shopData.description);

      const getNotice = await services.get(NOTICES_API.SHOP_LIST(shopId));

      const getJob = getNotice.data.items;
      setShowJob(getJob);
    };

    importData();
  }, [jobId]);

  if (!storeName || !addressSelected || !imgFile || !textExplain) {
    return (
      <S.Container1>
        <S.Title1>내 가게</S.Title1>
        <S.Card1>
          <S.CardText>내 가게를 소개하고 공고도 등록해 보세요.</S.CardText>
          <Link href={MY_STORE_ROUTES.STORE.NEW}>
            <S.Button>가게 등록하기</S.Button>
          </Link>
        </S.Card1>
      </S.Container1>
    );
  }

  if (!showJob || showJob.length === 0) {
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
                  <S.CardSmallTitle>{categorySelected}</S.CardSmallTitle>
                  <S.CardTitle>{storeName}</S.CardTitle>
                </S.CardTitleWrap>
                <S.CardNavWrap>
                  <S.TopNavIcon />
                  <S.CardNavText>{addressSelected}</S.CardNavText>
                </S.CardNavWrap>
                <S.CardTextArea>{textExplain}</S.CardTextArea>
                <S.CardButtonWrap>
                  <S.CardEditButton
                    onClick={() => {
                      router.push(MY_STORE_ROUTES.JOBS.EDIT(jobId as string));
                    }}
                  >
                    편집하기
                  </S.CardEditButton>
                  <S.CardRegisterButton
                    onClick={() => {
                      router.push(MY_STORE_ROUTES.JOBS.NEW);
                    }}
                  >
                    공고 등록하기
                  </S.CardRegisterButton>
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
              <Link href={MY_STORE_ROUTES.JOBS.NEW}>
                <S.JobsButton>공고 등록하기</S.JobsButton>
              </Link>
            </S.CardJobs>
          </S.Section02>
        </S.ContainerBg>
      </>
    );
  }

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
                <S.CardSmallTitle>{categorySelected}</S.CardSmallTitle>
                <S.CardTitle>{storeName}</S.CardTitle>
              </S.CardTitleWrap>
              <S.CardNavWrap>
                <S.TopNavIcon />
                <S.CardNavText>{addressSelected}</S.CardNavText>
              </S.CardNavWrap>
              <S.CardTextArea>{textExplain}</S.CardTextArea>
              <S.CardButtonWrap>
                <S.CardEditButton
                  onClick={() => {
                    router.push(MY_STORE_ROUTES.JOBS.EDIT(jobId as string));
                  }}
                >
                  편집하기
                </S.CardEditButton>
                <S.CardRegisterButton
                  onClick={() => {
                    router.push(MY_STORE_ROUTES.JOBS.NEW);
                  }}
                >
                  공고 등록하기
                </S.CardRegisterButton>
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
            {showJob.map(i => (
              <S.CardList key={i.item.id}>
                <S.CardListImgWrap>
                  <Image src={imgFile} fill alt="StoreImg" priority />
                </S.CardListImgWrap>
                <S.CardListTextWrap>
                  <S.CardListTitleWrap>
                    <S.CardListTitle>{storeName}</S.CardListTitle>
                  </S.CardListTitleWrap>
                  <S.CardListNavWrap01>
                    <S.ClockIcon />
                    <S.CardListNavText>
                      {changeTime()} ({i.item.workhour}
                      시간)
                    </S.CardListNavText>
                  </S.CardListNavWrap01>
                  <S.CardListNavWrap>
                    <S.NavIcon />
                    <S.CardListNavText>{addressSelected}</S.CardListNavText>
                  </S.CardListNavWrap>
                </S.CardListTextWrap>
                <S.CardPriceTextWrap>
                  <S.CardPriceText>
                    {i.item.hourlyPay.toLocaleString('ko-KR')}원
                  </S.CardPriceText>
                  <S.CardPriceSubTextWrap>
                    <S.CardPriceSubText>기존 시급보다 50%</S.CardPriceSubText>
                    <S.ArrowIcon />
                  </S.CardPriceSubTextWrap>
                </S.CardPriceTextWrap>
              </S.CardList>
            ))}
          </S.CardListWrap>
          <S.CardListWrap>
            <S.CardListDisable>
              <S.CardListImgWrap>
                <div>마감 완료</div>
                <Image src={StoreImg} fill alt="StoreImg" priority />
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

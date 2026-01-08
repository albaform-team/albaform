import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { isAxiosError } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import withAuthentication from '@/components/hoc/withAuthentication';
import { NOTICES_API } from '@/constants/api';
import { MY_STORE_ROUTES } from '@/constants/routes';
import useInfinitePagination from '@/hooks/useInfinitePagination';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { services } from '@/lib/services/servicesClient';
import useAuthStore from '@/stores/useAuthStore';
import { formatDateTimeRange } from '@/utils/date';

import * as S from './index.style';
import { getPayIncreaseRate } from './jobs/[jobId]/_utils/number';

const StoreListIdPage = () => {
  const user = useAuthStore(s => s.user);
  // 가게 이름

  const [storeName, setStoreName] = useState('');

  // 분류
  const [categorySelected, setCategorySelected] = useState('선택');

  // 주소
  const [addressSelected, setAddressSelected] = useState('');

  // 가게 이미지
  const [imgFile, setImgFile] = useState<string>('');

  // 기본 시급
  const [originalHourlyPay, setOriginalHourlyPay] = useState<number>(0);

  // 가게 설명
  const [textExplain, setTextExplain] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  type Job = {
    item: {
      id: string;
      workhour: number;
      hourlyPay: number;
      startsAt: number;
      closed: boolean;
    };
  };
  const [showJob, setShowJob] = useState<Job[]>([]);
  const [shopId, setShopId] = useState<string | null>(null);

  const { meta, limit, reset, updateFromResponse } = useInfinitePagination(6);

  const handleEdit = () => {
    router.push(MY_STORE_ROUTES.STORE.EDIT);
  };

  useEffect(() => {
    if (!user?.id) return;

    const shopData = user.shop?.item;
    if (!shopData) return;

    const shopId = user.shop?.item.id;

    setShopId(shopId as string);
    setStoreName(shopData.name);
    setCategorySelected(shopData.category);
    setAddressSelected(shopData.address1);
    setImgFile(shopData.imageUrl);
    setTextExplain(shopData.description);
    setOriginalHourlyPay(shopData.originalHourlyPay);
  }, [user?.id, user?.shop?.item]);

  // 무한 스크롤
  const fetchNext = useCallback(
    async (mode: 'replace' | 'append', offset: number) => {
      if (!user?.shop?.item.id) return;

      setIsLoading(true);
      try {
        const res = await services.get(
          NOTICES_API.SHOP_LIST(user?.shop?.item.id),
          {
            params: { offset, limit },
          }
        );

        const data = res.data;

        setShowJob(prev =>
          mode === 'replace' ? data.items : [...prev, ...data.items]
        );

        updateFromResponse(data);
      } catch (e) {
        if (isAxiosError(e)) {
          alert(e.response?.data.message ?? '잠시후에 다시 시도해 주세요');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [limit, updateFromResponse, user?.shop?.item.id]
  );

  useEffect(() => {
    if (!shopId) return;

    reset();
    setShowJob([]);
    fetchNext('replace', 0);
  }, [fetchNext, reset, shopId]);

  const enabled = useMemo(
    () => !isLoading && meta.hasNext,
    [isLoading, meta.hasNext]
  );

  const targetRef = useIntersectionObserver<HTMLDivElement>({
    onIntersect: () => {
      if (!meta.hasNext) return;
      if (isLoading) return;
      fetchNext('append', meta.offset);
    },
    threshold: 0,
    enabled,
  });

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
                  <S.CardEditButton onClick={handleEdit}>
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
              <S.CardTextSection>
                <S.CardTitleWrap>
                  <S.CardSmallTitle>{categorySelected}</S.CardSmallTitle>
                  <S.CardTitle>{storeName}</S.CardTitle>
                </S.CardTitleWrap>
                <S.CardNavWrap>
                  <S.TopNavIcon />
                  <S.CardNavText>{addressSelected}</S.CardNavText>
                </S.CardNavWrap>
                <S.CardTextArea>{textExplain}</S.CardTextArea>
              </S.CardTextSection>
              <S.CardButtonWrap>
                <S.CardEditButton onClick={handleEdit}>
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
              <S.CardList
                key={i.item.id}
                href={MY_STORE_ROUTES.JOBS.DETAIL(i.item.id)}
                $closed={i.item.closed}
              >
                <S.CardListImgWrap>
                  <S.CardListTextClosed $closed={i.item.closed}>
                    마감 완료
                  </S.CardListTextClosed>
                  <Image src={imgFile} fill alt="StoreImg" priority />
                </S.CardListImgWrap>
                <S.CardListTextWrap>
                  <S.CardListTitleWrap>
                    <S.CardListTitle $closed={i.item.closed}>
                      {storeName}
                    </S.CardListTitle>
                  </S.CardListTitleWrap>
                  <S.CardListNavWrap01>
                    <S.ClockIcon $closed={i.item.closed} />
                    <S.CardListNavText $closed={i.item.closed}>
                      {formatDateTimeRange(i.item.startsAt.toString(), {
                        durationHours: i.item.workhour,
                      })}
                    </S.CardListNavText>
                  </S.CardListNavWrap01>
                  <S.CardListNavWrap>
                    <S.NavIcon $closed={i.item.closed} />
                    <S.CardListNavText $closed={i.item.closed}>
                      {addressSelected}
                    </S.CardListNavText>
                  </S.CardListNavWrap>
                </S.CardListTextWrap>
                <S.CardPriceTextWrap>
                  <S.CardPriceText $closed={i.item.closed}>
                    {i.item.hourlyPay.toLocaleString('ko-KR')}원
                  </S.CardPriceText>
                  {originalHourlyPay >= i.item.hourlyPay ? (
                    <div style={{ display: 'none' }}></div>
                  ) : (
                    <S.CardPriceSubTextWrap $closed={i.item.closed}>
                      <S.CardPriceSubText $closed={i.item.closed}>
                        기존 시급보다{' '}
                        {getPayIncreaseRate(
                          i.item.hourlyPay,
                          user!.shop!.item.originalHourlyPay
                        )}{' '}
                        %
                      </S.CardPriceSubText>
                      <S.ArrowIcon $closed={i.item.closed} />
                    </S.CardPriceSubTextWrap>
                  )}
                </S.CardPriceTextWrap>
              </S.CardList>
            ))}
            <div ref={targetRef}></div>
            {!meta.hasNext && <div></div>}
          </S.CardListWrap>
        </S.Section02>
      </S.ContainerBg>
    </>
  );
};

export default withAuthentication(StoreListIdPage, {
  allowedTypes: ['employer'],
});

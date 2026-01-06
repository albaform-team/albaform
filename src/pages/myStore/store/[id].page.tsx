import Image from 'next/image';
import { useRouter } from 'next/router';

import Modal from '@mui/material/Modal';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';

import CloseIcon from '@/assets/svg/closeicon.svg';
import withAuthentication from '@/components/hoc/withAuthentication';
import { IMAGES_API, SHOPS_API, USERS_API } from '@/constants/api';
import { MY_STORE_ROUTES } from '@/constants/routes';
import { services } from '@/lib/services/servicesClient';
import StoreImgComponent from '@/pages/myStore/store/_components/storeimg';
import useAuthStore from '@/stores/useAuthStore';

import * as S from './new.style';

const StoreRegisterPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const user = useAuthStore(s => s.user);
  const setShop = useAuthStore(s => s.setShop);

  // 가게 이름
  const [storeName, setStoreName] = useState('');

  const storeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  };

  // 분류
  const categoryList = [
    { value: '', name: '선택' },
    { value: '한식', name: '한식' },
    { value: '중식', name: '중식' },
    { value: '일식', name: '일식' },
    { value: '양식', name: '양식' },
    { value: '분식', name: '분식' },
    { value: '카페', name: '카페' },
    { value: '편의점', name: '편의점' },
    { value: '기타', name: '기타' },
  ];
  const [categorySelected, setCategorySelected] = useState('선택');
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorySelected(e.target.value);
  };

  // 주소
  const addressList = [
    { value: '', name: '선택' },
    { value: '서울시 종로구', name: '서울시 종로구' },
    { value: '서울시 중구', name: '서울시 중구' },
    { value: '서울시 용산구', name: '서울시 용산구' },
    { value: '서울시 성동구', name: '서울시 성동구' },
    { value: '서울시 광진구', name: '서울시 광진구' },
    { value: '서울시 동대문구', name: '서울시 동대문구' },
    { value: '서울시 중랑구', name: '서울시 중랑구' },
    { value: '서울시 성북구', name: '서울시 성북구' },
    { value: '서울시 강북구', name: '서울시 강북구' },
    { value: '서울시 도봉구', name: '서울시 도봉구' },
    { value: '서울시 노원구', name: '서울시 노원구' },
    { value: '서울시 은평구', name: '서울시 은평구' },
    { value: '서울시 서대문구', name: '서울시 서대문구' },
    { value: '서울시 마포구', name: '서울시 마포구' },
    { value: '서울시 양천구', name: '서울시 양천구' },
    { value: '서울시 강서구', name: '서울시 강서구' },
    { value: '서울시 구로구', name: '서울시 구로구' },
    { value: '서울시 금천구', name: '서울시 금천구' },
    { value: '서울시 영등포구', name: '서울시 영등포구' },
    { value: '서울시 동작구', name: '서울시 동작구' },
    { value: '서울시 관악구', name: '서울시 관악구' },
    { value: '서울시 서초구', name: '서울시 서초구' },
    { value: '서울시 강남구', name: '서울시 강남구' },
    { value: '서울시 송파구', name: '서울시 송파구' },
    { value: '서울시 강동구', name: '서울시 강동구' },
  ];
  const [addressSelected, setAddressSelected] = useState('선택');
  const handleAddressSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressSelected(e.target.value);
  };

  // 상세 주소
  const [addressDetail, setAddressDetail] = useState('');

  const addressDetailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  // 기본 시급
  const [pay, setPay] = useState('');

  const payInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPay(e.target.value);
  };

  // 가게 이미지
  const [imgFile, setImgFile] = useState<string>('');

  const imgUpload = async (file: File) => {
    const res = await services.post(IMAGES_API.CREATE_PRESIGNED_URL, {
      name: file.name,
      contentType: file.type,
    });

    const upLoadUrl = res.data.item.url as string;

    await axios.put(upLoadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });

    return upLoadUrl.split('?')[0];
  };

  const handleImgInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = await imgUpload(file);

    setImgFile(imageUrl);
  };

  // 가게 설명
  const [textExplain, setTextExplain] = useState('');

  const textAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextExplain(e.target.value);
  };

  useEffect(() => {
    if (!user?.shop) return;

    setStoreName(user?.shop.item.name);
    setCategorySelected(user?.shop.item.category);
    setAddressSelected(user?.shop.item.address1);
    setAddressDetail(user?.shop.item.address2);
    setPay(user?.shop.item.originalHourlyPay.toString());
    setImgFile(user?.shop.item.imageUrl);
    setTextExplain(user?.shop.item.description);
  }, [user]);

  // submit 관련
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getShop = await services.get(USERS_API.ME(user?.id as string));
    const shopId = getShop.data.item.shop.item.id;

    await services
      .put(SHOPS_API.DETAIL(shopId), {
        name: storeName,
        category: categorySelected,
        address1: addressSelected,
        address2: addressDetail,
        description: textExplain,
        imageUrl: imgFile,
        originalHourlyPay: Number(pay),
      })
      .then(res => {
        const {
          id,
          name,
          address1,
          address2,
          category,
          description,
          imageUrl,
          originalHourlyPay,
        } = res.data.item;

        handleOpen();
        setShop({
          item: {
            id,
            name,
            address1,
            address2,
            category,
            description,
            imageUrl,
            originalHourlyPay,
          },
        });
        router.push(MY_STORE_ROUTES.ROOT);
      })
      .catch(error => {
        console.log('등록에 실패하였습니다.', error);
      });
  };

  return (
    <S.Container>
      <S.Section>
        <S.TitleWrap>
          <S.Title>가게 정보 편집</S.Title>
          <Image
            onClick={() => router.push(MY_STORE_ROUTES.ROOT)}
            src={CloseIcon}
            alt="CloseIcon"
          />
        </S.TitleWrap>
        <S.Form onSubmit={handleSubmit}>
          <S.Wraps>
            <S.InputWrap>
              <S.InputWrapLabel>가게 이름*</S.InputWrapLabel>
              <S.Input
                type="text"
                placeholder="입력"
                value={storeName}
                onChange={storeNameInput}
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>분류*</S.InputWrapLabel>
              <S.Select value={categorySelected} onChange={handleSelect}>
                {categoryList.map(item => (
                  <option value={item.name} key={item.value}>
                    {item.name}
                  </option>
                ))}
              </S.Select>
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>주소*</S.InputWrapLabel>
              <S.Select value={addressSelected} onChange={handleAddressSelect}>
                {addressList.map(item => (
                  <option value={item.name} key={item.value}>
                    {item.name}
                  </option>
                ))}
              </S.Select>
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>상세 주소*</S.InputWrapLabel>
              <S.Input
                type="text"
                placeholder="입력"
                value={addressDetail}
                onChange={addressDetailInput}
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>기본 시급*</S.InputWrapLabel>
              <S.TextWon>원</S.TextWon>
              <S.Input
                type="number"
                placeholder="입력"
                value={pay}
                onChange={payInput}
              />
            </S.InputWrap>
          </S.Wraps>
          <S.Wraps>
            <S.InputWrapImg>
              <S.InputWrapLabel>가게 이미지</S.InputWrapLabel>
              {!imgFile ? (
                <S.StoreImgBox>
                  <StoreImgComponent />
                </S.StoreImgBox>
              ) : (
                <S.StoreImgBox>
                  <Image src={imgFile} fill alt="imgFile" />
                </S.StoreImgBox>
              )}
              <S.FileInput
                type="file"
                accept="image/*"
                onChange={handleImgInput}
              />
            </S.InputWrapImg>
          </S.Wraps>
          <S.Wraps>
            <S.InputWrapExplain>
              <S.InputWrapLabel>가게 설명</S.InputWrapLabel>
              <S.TextBox
                placeholder="입력"
                value={textExplain}
                onChange={textAreaInput}
              />
            </S.InputWrapExplain>
          </S.Wraps>
          <S.Button type="submit">편집하기</S.Button>
        </S.Form>
        <Modal open={open} onClose={handleClose}>
          <S.ModalBox>
            <S.ModalText>수정이 완료되었습니다.</S.ModalText>
            <S.ModalButton onClick={handleClose}>확인</S.ModalButton>
          </S.ModalBox>
        </Modal>
      </S.Section>
    </S.Container>
  );
};

export default withAuthentication(StoreRegisterPage, {
  allowedTypes: ['employee'],
});

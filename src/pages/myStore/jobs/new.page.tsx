import Image from 'next/image';

import Modal from '@mui/material/Modal';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';

import CloseIcon from '@/assets/svg/closeicon.svg';
import useAuthStore from '@/stores/useAuthStore';

import * as S from './new.style';

const JobRegisterPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 시급
  const [pay, setPay] = useState('');

  const payInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPay(e.target.value);
  };

  // 시작 일시
  const [time, setTime] = useState('');

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  // 없무 시간
  const [workTime, setWorkTime] = useState('');

  const handleWorkTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkTime(e.target.value);
  };

  // 공고 설명
  const [jobExplain, setJobExplain] = useState('');

  const textAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobExplain(e.target.value);
  };

  // submit 관련
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { accessToken } = useAuthStore.getState();

    const getInfo = sessionStorage.getItem('auth-storage');
    const getUser = JSON.parse(getInfo as string);
    const getUserId = getUser.state.user.id;

    const getShop = await axios.get(
      `https://bootcamp-api.codeit.kr/api/0-1/the-julge/users/${getUserId}`
    );
    const shopId = getShop.data.item.shop.item.id;

    try {
      const res = await axios.post(
        `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices`,
        {
          hourlyPay: Number(pay),
          startsAt: new Date(time).toISOString(),
          workhour: Number(workTime),
          description: jobExplain,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!shopId) {
        console.log('shopId가 없습니다');
        return;
      }

      handleOpen();
      console.log('등록이 완료되었습니다.');
    } catch (error) {
      console.log('등록에 실패하였습니다.', error);
    }
  };

  return (
    <S.Container>
      <S.Section>
        <S.TitleWrap>
          <S.Title>공고 등록</S.Title>
          <Image src={CloseIcon} alt="CloseIcon" />
        </S.TitleWrap>
        <S.Form onSubmit={handleSubmit}>
          <S.Wraps>
            <S.InputWrap>
              <S.InputWrapLabel>시급*</S.InputWrapLabel>
              <S.TextWon>원</S.TextWon>
              <S.Input
                type="number"
                placeholder="입력"
                value={pay}
                onChange={payInput}
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>시작 일시*</S.InputWrapLabel>
              <S.Input
                type="datetime-local"
                value={time}
                onChange={handleTime}
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.InputWrapLabel>업무 시간*</S.InputWrapLabel>
              <S.TextWon>시간</S.TextWon>
              <S.Input
                type="number"
                placeholder="입력"
                value={workTime}
                onChange={handleWorkTime}
              />
            </S.InputWrap>
          </S.Wraps>
          <S.Wraps>
            <S.InputWrapExplain>
              <S.InputWrapLabel>공고 설명</S.InputWrapLabel>
              <S.TextBox
                placeholder="입력"
                value={jobExplain}
                onChange={textAreaInput}
              />
            </S.InputWrapExplain>
          </S.Wraps>
          <S.Button type="submit">등록하기</S.Button>
        </S.Form>
        <Modal open={open} onClose={handleClose}>
          <S.ModalBox>
            <S.ModalText>등록이 완료되었습니다.</S.ModalText>
            <S.ModalButton onClick={handleClose}>확인</S.ModalButton>
          </S.ModalBox>
        </Modal>
      </S.Section>
    </S.Container>
  );
};

export default JobRegisterPage;

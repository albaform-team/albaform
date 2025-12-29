'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Box } from '@mui/material';
import { isAxiosError } from 'axios';
import { ReactNode, useState } from 'react';

import logo from '@/assets/imgs/logo.png';
import { AUTH_ROUTES, STORE_ROUTES } from '@/constants/routes';
import { signup } from '@/lib/services/authService';
import { UserType } from '@/types/api/auth';

import SignUpModal from './_components/SignUpModal';
import UserRadio from './_components/UserRadio';
import useSignupForm from './_hooks/useSignupForm';
import * as S from './index.style';

export interface ModalState {
  open: boolean;
  message: string;
}

const SignupPage = () => {
  const router = useRouter();

  const {
    form,
    emailError,
    pwError,
    pwConfirmError,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setType,
    blurEmail,
    blurPassword,
    blurPasswordConfirm,
    handleSubmit,
  } = useSignupForm();

  const [modalState, setModalState] = useState<ModalState>({
    open: false,
    message: '',
  });

  const onSubmit = handleSubmit(async validForm => {
    try {
      await signup({
        email: validForm.email,
        password: validForm.password,
        type: validForm.type,
      });

      setModalState({
        open: true,
        message: '가입이 완료되었습니다!',
      });

      router.replace(AUTH_ROUTES.LOGIN);
    } catch (e) {
      if (isAxiosError(e)) {
        setModalState({
          open: true,
          message: e.response?.data?.message ?? '잠시 후 다시 시도해 주세요',
        });
        return;
      }

      setModalState({
        open: true,
        message: '알 수 없는 오류가 발생했습니다',
      });
    }
  });

  const handleClose = () => setModalState({ open: false, message: '' });

  return (
    <S.SignupLayout>
      <S.Title>
        <Link href={STORE_ROUTES.ROOT} aria-label="홈으로 이동">
          <Image
            src={logo}
            fill
            style={{ objectFit: 'contain' }}
            alt="더 줄게 로고"
          />
        </Link>
      </S.Title>
      <S.Form onSubmit={onSubmit}>
        <div>
          <label className="input-label" htmlFor="userEmail">
            이메일
          </label>
          <S.InputBox
            id="userEmail"
            placeholder="입력"
            value={form.email}
            onChange={e => setEmail(e.target.value)}
            onBlur={blurEmail}
            error={!!emailError}
            helperText={emailError || ''}
            fullWidth
          />
        </div>
        <div>
          <label className="input-label" htmlFor="userPassword">
            비밀번호
          </label>
          <S.InputBox
            id="userPassword"
            type="password"
            placeholder="입력"
            value={form.password}
            onChange={e => setPassword(e.target.value)}
            onBlur={blurPassword}
            error={!!pwError}
            helperText={pwError || ''}
            fullWidth
          />
        </div>
        <div>
          <label className="input-label" htmlFor="userPasswordConfirm">
            비밀번호 확인
          </label>
          <S.InputBox
            id="userPasswordConfirm"
            type="password"
            placeholder="입력"
            value={form.passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            onBlur={blurPasswordConfirm}
            error={!!pwConfirmError}
            helperText={pwConfirmError || ''}
            fullWidth
          />
        </div>
        <S.TypeSection>
          <label className="input-label" htmlFor="user-type">
            회원 유형
          </label>
          <S.UserRadioGroup
            value={form.type}
            onChange={e => setType(e.target.value as UserType)}
            name="user-type"
          >
            <S.UserFormControlLabel
              value="employee"
              control={<UserRadio />}
              label="알바님"
            />
            <S.UserFormControlLabel
              value="employer"
              control={<UserRadio />}
              label="사장님"
            />
          </S.UserRadioGroup>
        </S.TypeSection>
        <S.SubmitButton type="submit" variant="contained">
          가입하기
        </S.SubmitButton>
      </S.Form>
      <Box>
        <S.BottomText>
          이미 가입하셨나요? <Link href={AUTH_ROUTES.LOGIN}>로그인하기</Link>
        </S.BottomText>
      </Box>
      <SignUpModal modalState={modalState} handleClose={handleClose} />
    </S.SignupLayout>
  );
};

SignupPage.getLayout = (page: ReactNode) => {
  return <>{page}</>;
};

export default SignupPage;

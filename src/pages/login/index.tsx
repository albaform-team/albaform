import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';

import logo from '@/assets/imgs/logo.png';
import { AUTH_ROUTES, STORE_ROUTES } from '@/constants/routes';
import { login } from '@/lib/services/authService';

import LoginModal from './_components/LoginModal';
import useLoginForm from './_hooks/useLoginForm';
import * as S from './index.style';

export interface ModalState {
  open: boolean;
  message: string;
}

export default function LoginPage() {
  const {
    form,
    emailError,
    pwError,
    setEmail,
    setPassword,
    blurEmail,
    blurPassword,
    handleSubmit,
  } = useLoginForm();
  const [modalState, setModalState] = useState<ModalState>({
    open: false,
    message: '',
  });

  const onSubmit = handleSubmit(async validForm => {
    try {
      const data = await login(validForm.email, validForm.password);
      console.log(data);
    } catch (e) {
      if (isAxiosError(e)) {
        setModalState({ open: true, message: e.response?.data.message });
      }
    }
  });

  const handleClose = () => {
    setModalState({ open: false, message: '' });
  };

  return (
    <S.LoginLayout>
      <S.Title>
        <Link href={STORE_ROUTES.ROOT}>
          <Image
            src={logo}
            fill
            style={{ objectFit: 'cover' }}
            alt="더 줄게 로고"
          />
        </Link>
      </S.Title>
      <S.LoginForm onSubmit={onSubmit}>
        <div>
          <label htmlFor="userEmail">이메일</label>
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
          <label htmlFor="userPassword">비밀번호</label>
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
        <S.SubmitButton type="submit" variant="contained">
          로그인 하기
        </S.SubmitButton>
      </S.LoginForm>
      <Box sx={{ textAlign: 'center' }}>
        <S.TypographySignUp>
          회원이 아니신가요?{' '}
          <Link href={AUTH_ROUTES.SIGN_UP}>회원가입하기</Link>{' '}
        </S.TypographySignUp>
      </Box>
      <LoginModal modalState={modalState} handleClose={handleClose} />
    </S.LoginLayout>
  );
}

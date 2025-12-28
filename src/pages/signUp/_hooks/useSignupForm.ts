// src/app/signup/_hooks/useSignupForm.ts
import { useCallback, useMemo, useState } from 'react';

import { UserType } from '@/types/api/auth';

interface FormState {
  email: string;
  password: string;
  passwordConfirm: string;
  type: UserType;
}

interface Errors {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (form: FormState): Errors => {
  const errors: Errors = {};

  if (!form.email.trim()) errors.email = '이메일을 입력해 주세요';
  else if (!emailRegex.test(form.email))
    errors.email = '이메일 형식이 올바르지 않습니다';

  if (!form.password) errors.password = '비밀번호를 입력해 주세요';
  else if (form.password.length < 8)
    errors.password = '비밀번호는 8자 이상으로 입력해 주세요';

  if (!form.passwordConfirm)
    errors.passwordConfirm = '비밀번호 확인을 입력해 주세요';
  else if (form.passwordConfirm !== form.password)
    errors.passwordConfirm = '비밀번호가 일치하지 않습니다';

  return errors;
};

const useSignupForm = () => {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
    passwordConfirm: '',
    type: 'employee',
  });

  const [touched, setTouched] = useState<Record<keyof Errors, boolean>>({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const errors = useMemo(() => validate(form), [form]);

  const emailError = touched.email ? errors.email : undefined;
  const pwError = touched.password ? errors.password : undefined;
  const pwConfirmError = touched.passwordConfirm
    ? errors.passwordConfirm
    : undefined;

  const setEmail = useCallback((v: string) => {
    setForm(prev => ({ ...prev, email: v }));
  }, []);

  const setPassword = useCallback((v: string) => {
    setForm(prev => ({ ...prev, password: v }));
  }, []);

  const setPasswordConfirm = useCallback((v: string) => {
    setForm(prev => ({ ...prev, passwordConfirm: v }));
  }, []);

  const setType = useCallback((v: UserType) => {
    setForm(prev => ({ ...prev, type: v }));
  }, []);

  const blurEmail = useCallback(
    () => setTouched(prev => ({ ...prev, email: true })),
    []
  );
  const blurPassword = useCallback(
    () => setTouched(prev => ({ ...prev, password: true })),
    []
  );
  const blurPasswordConfirm = useCallback(
    () => setTouched(prev => ({ ...prev, passwordConfirm: true })),
    []
  );

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleSubmit =
    (submitFn: (valid: FormState) => Promise<void>) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setTouched({ email: true, password: true, passwordConfirm: true });

      const nextErrors = validate(form);
      if (Object.keys(nextErrors).length > 0) return;

      await submitFn(form);
    };

  return {
    form,
    isValid,
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
  };
};

export default useSignupForm;

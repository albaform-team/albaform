import { useMemo, useState } from 'react';

interface FormState {
  email: string;
  password: string;
}

interface TouchedState {
  email: boolean;
  password: boolean;
}

const useLoginForm = () => {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [touched, setTouched] = useState<TouchedState>({
    email: false,
    password: false,
  });

  const emailError = useMemo(() => {
    if (!touched.email) return '';
    if (!form.email.trim()) return '이메일을 입력해 주세요.';
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return ok ? '' : '이메일 형식을 확인해 주세요.';
  }, [form.email, touched.email]);

  const pwError = useMemo(() => {
    if (!touched.password) return '';
    if (!form.password.trim()) return '비밀번호를 입력해 주세요.';
    const ok = form.password.length > 8;
    return ok ? '' : '8자 이상 입력해 주세요.';
  }, [form.password, touched.password]);

  const setEmail = (email: string) => {
    setForm(prev => ({ ...prev, email }));
  };

  const setPassword = (password: string) => {
    setForm(prev => ({ ...prev, password }));
  };

  const blurEmail = () => setTouched(prev => ({ ...prev, email: true }));
  const blurPassword = () => setTouched(prev => ({ ...prev, password: true }));

  const validateAll = () => {
    setTouched({ email: true, password: true });
    return !(emailError || pwError);
  };

  const handleSubmit = (onValid: (form: FormState) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();

      const ok = validateAll();
      if (!ok) return;

      onValid(form);
    };
  };

  return {
    form,
    emailError,
    pwError,
    setEmail,
    setPassword,
    blurEmail,
    blurPassword,
    handleSubmit,
  };
};

export default useLoginForm;

import { AUTH_API } from '@/constants/api';
import useAuthStore from '@/stores/useAuthStore';
import { LoginResponse } from '@/types/api/auth';

import { services } from './servicesClient';

// 로그인
export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const { data } = await services.post<LoginResponse>(AUTH_API.LOGIN, {
    email,
    password,
  });
  const { setAccessToken } = useAuthStore.getState();

  if (data.item.token) {
    setAccessToken(data.item.token);
  }

  return data;
};

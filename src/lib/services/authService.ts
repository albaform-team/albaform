import { AUTH_API, USERS_API } from '@/constants/api';
import useAuthStore from '@/stores/useAuthStore';
import { LoginResponse, SignupReponse, UserType } from '@/types/api/auth';

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
  const { setAuth } = useAuthStore.getState();

  if (data.item.token) {
    setAuth({
      accessToken: data.item.token,
      user: data.item.user.item,
    });
  }

  return data;
};

interface SignupRequest {
  email: string;
  password: string;
  type: UserType;
}

export const signup = async (
  payload: SignupRequest
): Promise<SignupReponse> => {
  // 예시: POST /auth/signup
  // 실제 API 스펙에 맞게 URL/바디 형태 수정
  const res = await services.post(USERS_API.SIGN_UP, {
    email: payload.email,
    password: payload.password,
    type: payload.type,
  });

  return res.data;
};

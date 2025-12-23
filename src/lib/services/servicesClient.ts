import axios, { AxiosError, AxiosResponse } from 'axios';

import useAuthStore from '@/stores/useAuthStore';
import { ErrorResponse } from '@/types/api/apiError';

export const services = axios.create({
  timeout: 5000,
  baseURL: 'https://bootcamp-api.codeit.kr/api/0-1/the-julge',
  headers: {
    'Content-Type': 'application/json',
  },
});

const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res;
};

const onError = (error: AxiosError<ErrorResponse>): Promise<ErrorResponse> => {
  const res = error.response;

  if (res?.data) {
    // 추후에 에러 처리 작업 진행 예정
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

services.interceptors.request.use(config => {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

services.interceptors.response.use(onResponse, onError);

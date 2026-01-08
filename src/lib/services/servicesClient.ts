import axios, { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import useAuthStore from '@/stores/useAuthStore';
import { ErrorResponse } from '@/types/api/apiError';

export const services = axios.create({
  timeout: 5000,
  baseURL: 'https://bootcamp-api.codeit.kr/api/20-3/the-julge',
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
    toast.error(res.data.message ?? '잠시후에 다시 시도해주세요');
    return Promise.reject(error);
  }
  toast.error('서버 장애 : 잠시후에 다시 시도해주세요');
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

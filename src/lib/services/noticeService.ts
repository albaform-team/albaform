import { MyProfileResponse } from '@/types/user/myProfile';
import { NoticeDetailResponse } from '@/types/user/notice';
import { NoticeListResponse } from '@/types/user/noticeList';

import { services } from './servicesClient';

type GetNoticeParams = {
  offset?: number;
  limit?: number;
  sort?: 'time' | 'pay' | 'hour' | 'shop';
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
};

export const getNotice = async (params?: GetNoticeParams) => {
  const res = await services.get<NoticeListResponse>('/notices', {
    params,
  });
  return res.data;
};

export const getNoticeDetail = async (shopId: string, noticeId: string) => {
  const res = await services.get<NoticeDetailResponse>(
    `/shops/${shopId}/notices/${noticeId}`
  );
  return res.data.item;
};

export const getMyProfile = async (userId: string) => {
  const res = await services.get<MyProfileResponse>(`/users/${userId}`);
  return res.data.item;
};

export const applyNotice = async (shopId: string, noticeId: string) => {
  const res = await services.post(
    `/shops/${shopId}/notices/${noticeId}/applications`
  );

  return res.data.item;
};

export const cancelApplication = async (
  shopId: string,
  noticeId: string,
  applicationId: string
) => {
  const res = await services.put(
    `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      status: 'canceled',
    }
  );

  return res.data.item;
};

import { MyProfileResponse } from '@/types/user/myProfile';
import { NoticeDetailResponse } from '@/types/user/notice';
import { NoticeListResponse } from '@/types/user/noticeList';

import { services } from './servicesClient';

export const getNotice = async () => {
  const res = await services.get<NoticeListResponse>(`/notices`);
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

export const cancelApplication = async (shopId: string, noticeId: string) => {
  const res = await services.delete(
    `/shops/${shopId}/notices/${noticeId}/applications`
  );

  return res.data.item;
};

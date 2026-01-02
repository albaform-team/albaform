import axios from 'axios';

import { NoticeDetailResponse } from '@/types/user/notice';

export const getNoticeDetail = async (shopId: string, noticeId: string) => {
  const res = await axios.get<NoticeDetailResponse>(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}`
  );
  return res.data.item;
};

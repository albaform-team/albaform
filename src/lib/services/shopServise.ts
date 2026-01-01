import { _MOCK_SHOP_NOTICES_APPLICATIONS } from '@/__MOCK/_MOCK_SHOP_NOTICES_APPLICATIONS';
import { APPLICATIONS_API, NOTICES_API } from '@/constants/api';
import {
  ApplicationStatus,
  ShopNoticeApplicationsItem,
  ShopNoticeApplicationsResponse,
} from '@/types/api/shopNoticeApplications';
import { ShopNoticeDetailResponse } from '@/types/api/shopNoticeDetail';

import { services } from './servicesClient';

export const getShopNoticeDetail = async (shopId: string, noticeId: string) => {
  const { data } = await services.get<ShopNoticeDetailResponse>(
    NOTICES_API.SHOP_DETAIL(shopId, noticeId)
  );
  return data;
};

export const getShopNoticeApplications = async (
  shopId: string,
  noticeId: string,
  offset: number,
  limit: number
) => {
  const { data } = await services.get<ShopNoticeApplicationsResponse>(
    APPLICATIONS_API.SHOP_NOTICE_LIST(shopId, noticeId),
    { params: { offset, limit } }
  );
  console.log(data);
  return _MOCK_SHOP_NOTICES_APPLICATIONS;
};

export const updateJobApplicationStatus = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: ApplicationStatus
) => {
  const { data } = await services.put<ShopNoticeApplicationsItem>(
    APPLICATIONS_API.SHOP_NOTICE_DETAIL(shopId, noticeId, applicationId),
    { status }
  );
  console.log(data);
  return status;
};

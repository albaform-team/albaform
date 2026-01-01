import {
  ApplicationStatus,
  ShopNoticeDetailResponse,
} from '@/types/api/shopNoticeDetail';

export interface NoticeDetail {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
  };
  currentUserApplication?: {
    id: string;
    status: ApplicationStatus;
    createdAt: string;
  };
}

export const mapJobResponseToJob = (
  data: ShopNoticeDetailResponse
): NoticeDetail => {
  const { item } = data;

  return {
    id: item.id,
    hourlyPay: item.hourlyPay,
    startsAt: item.startsAt,
    workhour: item.workhour,
    description: item.description,
    closed: item.closed,
    shop: item.shop.item,
    currentUserApplication: item.currentUserApplication?.item,
  };
};

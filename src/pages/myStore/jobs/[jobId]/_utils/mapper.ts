import { ShopNoticeApplicationsItem } from '@/types/api/shopNoticeApplications';
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

export interface ApplicantRowVM {
  user: string;
  Introduction: string;
  phone: string;
  status: {
    status: ApplicationStatus;
    shopId: string;
    noticeId: string;
    applicationId: string;
  };
}

export const applicantListMapper = (
  data: ShopNoticeApplicationsItem
): ApplicantRowVM => ({
  user: data.item.user.item.name as string,
  Introduction: data.item.user.item.bio as string,
  phone: data.item.user.item.phone as string,
  status: {
    status: data.item.status,
    shopId: data.item.shop.item.id,
    noticeId: data.item.notice.item.id,
    applicationId: data.item.id,
  },
});

import {
  ApplicationStatus,
  AppliedJobListResponse,
  NoticeItem,
  ShopItem,
} from '@/types/api/userAppliedJobList';
import { formatDateTimeRange } from '@/utils/date';

export interface AppliedJobListItem {
  id: string;
  status: ApplicationStatus;
  createdAt: string;
  shop: ShopItem;
  notice: NoticeItem;
}

export interface AppliedJobListViewModel extends Omit<
  AppliedJobListResponse,
  'items'
> {
  items: AppliedJobListItem[];
}

export const appliedJobListMapper = (
  data: AppliedJobListResponse
): AppliedJobListViewModel => {
  const items = data.items.map(({ item }) => ({
    id: item.id,
    status: item.status,
    createdAt: item.createdAt,
    shop: item.shop.item,
    notice: item.notice.item,
  }));

  return { ...data, items };
};

const STATUS_LABEL: Record<ApplicationStatus, string> = {
  pending: '대기중',
  accepted: '승인 완료',
  rejected: '거절',
  canceled: '취소',
};

export const getStatusLabel = (status: ApplicationStatus): string => {
  return STATUS_LABEL[status];
};

export interface ApplicantRowVM {
  shop: { name: string; id: string };
  date: string;
  pay: string;
  status: ApplicationStatus;
}

export const mapAppliedJobToApplicantRow = (
  job: AppliedJobListItem
): ApplicantRowVM => ({
  shop: { name: job.shop.name, id: job.id },
  date: formatDateTimeRange(job.notice.startsAt, {
    durationHours: job.notice.workhour,
  }),
  pay: job.notice.hourlyPay.toLocaleString(),
  status: job.status,
});

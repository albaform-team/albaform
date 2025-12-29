import {
  ApplicationStatus,
  AppliedJobListResponse,
  NoticeItem,
  ShopItem,
} from '@/types/api/userAppliedJobList';

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

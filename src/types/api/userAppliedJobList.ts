interface Link {
  [key: string]: unknown;
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface Shop {
  item: ShopItem;
  href: string;
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

interface Notice {
  item: NoticeItem;
  href: string;
}

export type ApplicationStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'canceled';

export interface ApplicationItem {
  id: string;
  status: ApplicationStatus;
  createdAt: string;
  shop: Shop;
  notice: Notice;
}

export interface Application {
  item: ApplicationItem;
  links: Link[];
}

export interface AppliedJobListResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Application[];
  links: Link[];
}

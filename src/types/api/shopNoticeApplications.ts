export type ApplicationStatus =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'canceled';

export type UserType = 'employer' | 'employee';

export interface ShopNoticeApplicationsResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: ShopNoticeApplicationsItem[];
  links: unknown[];
}

export interface ShopNoticeApplicationsItem {
  item: ApplicationItem;
  links: unknown[];
}

export interface ApplicationItem {
  id: string;
  status: ApplicationStatus;
  createdAt: string;

  user: {
    item: UserItem;
    href: string;
  };

  shop: {
    item: ShopItem;
    href: string;
  };

  notice: {
    item: NoticeItem;
    href: string;
  };
}

export interface UserItem {
  id: string;
  email: string;
  type: UserType;
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
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

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface ApiLink {
  rel: 'self' | 'prev' | 'next' | string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | string;
  href: string;
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

export interface Shop {
  item: ShopItem;
  href: string;
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
}

export interface NoticeListItem {
  item: NoticeItem;
  links: ApiLink[];
}

export interface NoticesResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string[];
  keyword?: string;
  items: NoticeListItem[];
  links: ApiLink[];
}

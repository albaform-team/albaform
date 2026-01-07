// 공통 링크 타입
export interface ApiLink {
  rel: 'self' | 'prev' | 'next' | string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  href: string;
}

// Shop 도메인
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

// Shop 리소스 래퍼
export interface ShopResource {
  item: ShopItem;
  href: string;
}

// Notice 도메인
export interface NoticeListItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: ShopResource;
}

// items 배열 안의 구조
export interface NoticeListWrappedItem {
  item: NoticeListItem;
  links: ApiLink[];
}

// 최종 리스트 응답 타입
export interface NoticeListResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string;
  keyword?: string;
  items: NoticeListWrappedItem[];
  links: ApiLink[];
}

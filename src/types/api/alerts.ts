export type AlertResult = 'accepted' | 'rejected';
export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface ApiLink {
  rel?: string;
  href?: string;
  method?: string;
  [key: string]: unknown;
}

export interface ApiItem<T> {
  item: T;
  links?: ApiLink[];
}

export interface ApiRef<T> {
  item: T;
  href: string;
}

export interface UserAlertsResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<ApiItem<UserAlertItem>>;
}

export interface ReadAlertResponse {
  offset: number;
  limit: number;
  items: Array<ApiItem<UserAlertItem>>;
}

export interface UserAlertItem {
  id: string;
  createdAt: string;
  result: AlertResult;
  read: boolean;

  application: ApiRef<AlertApplicationItem>;
  shop: ApiRef<AlertShopItem>;
  notice: ApiRef<AlertNoticeItem>;

  links?: ApiLink[];
}

export interface AlertApplicationItem {
  id: string;
  status: ApplicationStatus;
}

export interface AlertShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface AlertNoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

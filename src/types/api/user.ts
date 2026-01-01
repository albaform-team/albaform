import { LoginUser } from './auth';

export interface User extends LoginUser {
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
  shop: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
  } | null;
}

export interface UserInfoResponse {
  item: User;
  links: unknown[];
}

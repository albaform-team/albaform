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

export type UserTypeSelect = 'employer' | 'employee';

export interface MyProfile {
  id: string;
  email: string;
  type: UserTypeSelect;

  name?: string;
  phone?: string;
  address?: string;
  bio?: string;

  shop: {
    item: ShopItem;
  } | null;
}

export interface MyProfileResponse {
  item: MyProfile;
}

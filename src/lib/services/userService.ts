import { USERS_API } from '@/constants/api';
import { UserInfoResponse } from '@/types/api/user';

import { services } from './servicesClient';

export const GetUserInfo = async (userId: string) => {
  const { data } = await services.get<UserInfoResponse>(USERS_API.ME(userId));

  return data;
};
